import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export const structure = (S, context) =>
    S.list()
        .title('Content')
        .items([
            // List of Categories (Orderable)
            orderableDocumentListDeskItem({ type: 'category', title: 'Categories', S, context }),

            // Projects by Category (Nested Orderable)
            S.listItem()
                .title('Projects by Category')
                .child(
                    S.documentList()
                        .title('Select Category')
                        .filter('_type == "category"')
                        .child(categoryId => {
                            // HACK: We create a dummy orderable item to "steal" the internal Component
                            // that the plugin uses, since it's not exported directly.
                            const dummyItem = orderableDocumentListDeskItem({
                                type: 'project',
                                title: 'Projects',
                                S,
                                context
                            })

                            // The plugin returns a serialized object. We extract the component from its child.
                            const OrderableListComponent = dummyItem.child.component
                            const baseMenuItems = dummyItem.child.menuItems || []

                            // 1. Create a standard documentList builder
                            const list = S.documentList()
                                .title('Projects')
                                .filter('_type == "project" && category._ref == $categoryId')
                                .params({ categoryId })
                                .defaultOrdering([{ field: 'orderRank', direction: 'asc' }]) // Fallback

                            // 2. Serialize it to a plain object
                            const serializedList = list.serialize()

                            // 3. Inject the OrderableDocumentList component and its specific options
                            // This tricks Sanity into treating it as a documentList (navigation works!)
                            // but rendering it with the custom ordering UI.
                            return Object.assign(serializedList, {
                                type: 'component',
                                component: OrderableListComponent,
                                options: {
                                    type: 'project',
                                    filter: '_type == "project" && category._ref == $categoryId',
                                    params: { categoryId },
                                    client: context.getClient({ apiVersion: '2024-01-14' }),
                                    currentVersion: 'published'
                                },
                                menuItems: [
                                    ...baseMenuItems,
                                    ...serializedList.menuItems || []
                                ]
                            })
                        })
                ),

            S.divider(),
            orderableDocumentListDeskItem({ type: 'skill', title: 'Skills (Ordered)', S, context }),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) => !['project', 'skill', 'category'].includes(item.getId()),
            ),
        ])
