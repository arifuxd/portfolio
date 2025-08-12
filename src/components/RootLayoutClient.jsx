"use client";

import { usePathname } from "next/navigation";
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Preloader from "@/components/ui/preloader";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";

export default function RootLayoutClient({ children }) {
  const pathname = usePathname();
  const hideCTA = pathname === "/contact";

  return (
    <>
      <BootstrapForBrowser />
      <Preloader />
      <Header />
      {children}
      {!hideCTA && <CallToAction />}
      <Footer />
    </>
  );
}
