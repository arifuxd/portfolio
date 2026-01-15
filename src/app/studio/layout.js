export const metadata = {
    title: 'Sanity Studio',
    description: 'Content for the portfolio',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body style={{ margin: 0 }}>
                {children}
            </body>
        </html>
    )
}
