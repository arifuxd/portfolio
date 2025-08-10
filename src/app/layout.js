"use client";

import { usePathname } from "next/navigation";
import Preloader from "@/components/ui/preloader";
import "./global.css";
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideCTA = pathname === "/contact";

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        {!hideCTA && <CallToAction />}
        <Footer />
      </body>
    </html>
  );
}
