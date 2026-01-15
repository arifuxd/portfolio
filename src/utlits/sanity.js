import { client } from '../sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return null;
  return builder.image(source);
}

export async function getProjects() {
  return client.fetch(`*[_type == "project"]{
    title,
    "slug": slug.current,
    "category": category->title,
    coverImage,
    orderRank,
    _id,
    _createdAt
  } | order(orderRank asc, _createdAt desc)`);
}

export async function getProject(slug) {
  return client.fetch(`*[_type == "project" && slug.current == $slug][0]{
    ...,
    "slug": slug.current,
    "category": category->title,
    gallery[]{
      ...,
      _type == "image" => {
        "src": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height
      },
      _type == "vimeo" => {
        ...,
        "thumbnail": thumbnail
      }
    }
  }`, { slug });
}

export async function getSkills() {
  return client.fetch(`*[_type == "skill"] | order(orderRank asc, level desc)`);
}

export async function getCategories() {
  return client.fetch(`*[_type == "category"] | order(orderRank asc)`);
}
