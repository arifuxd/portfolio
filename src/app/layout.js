// src/app/layout.js
import "./global.css";
import RootLayoutClient from "@/components/RootLayoutClient";


export const metadata = {
  title: "Ariful Islam (arifuxd) | Creative Visualizer & Branding Expert",
  description:
    "Ariful Islam (arifuxd) – Creative Visualizer, Branding & Communication Specialist from Dhaka, Bangladesh. Expert in graphics design, motion graphics, video editing, and digital branding with 6+ years of experience delivering impactful designs for brands worldwide.",
  keywords: [
    "arifuxd",
    "Ariful Islam",
    "Creative Visualizer",
    "Branding Expert",
    "Graphics Designer Bangladesh",
    "Motion Graphics Designer Bangladesh",
    "Video Editor",
    "Brand Communication",
    "E-commerce Designer",
    "Digital Branding",
    "Portfolio Ariful Islam",
    "Creative Designer Dhaka"
  ],
  authors: [{ name: "Ariful Islam", url: "https://arifuxd.online" }],
  openGraph: {
    title: "Ariful Islam (arifuxd) | Creative Visualizer & Branding Expert",
    description:
      "Creative Visualizer & Branding Specialist from Dhaka, Bangladesh. 6+ years of expertise in graphics design, motion graphics, video editing, and brand communication.",
    url: "https://arifuxd.online",
    siteName: "arifuxd",
    images: [
      {
        url: "https://arifuxd.online/images/og-image.jpg", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Ariful Islam Portfolio - arifuxd"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariful Islam (arifuxd) | Creative Visualizer & Branding Expert",
    description:
      "Creative Visualizer, Branding & Communication Specialist with 6+ years of experience in graphics design, motion graphics, and digital branding.",
    images: ["https://arifuxd.online/images/og-image.jpg"]
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/favicon.ico"
  },
  metadataBase: new URL("https://arifuxd.online")
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ariful Islam (arifuxd)",
              "url": "https://arifuxd.online",
              "image": "https://arifuxd.online/images/ariful-islam-profile-photo.png", // Your profile image URL
              "sameAs": [
                "https://facebook.com/arifuxd",
                "https://www.linkedin.com/in/arifuxd",
                "https://twitter.com/arifuxd",
                "https://github.com/arifuxd"
              ],
              "jobTitle": "Creative Visualizer & Branding Expert",
              "worksFor": {
                "@type": "Organization",
                "name": "DiziShore",
              },
              "description": "Creative Visualizer, Branding & Communication Specialist with expertise in graphics design, motion graphics, video editing, and digital branding.",
              "email": "mailto:arifofficial00@gmail.com",
              "telephone": "+8801990004984",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dhaka",
                "addressCountry": "Bangladesh"
              }
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
