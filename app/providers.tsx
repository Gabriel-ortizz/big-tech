"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash === "#contato") {
      const footer = document.getElementById("contato");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}
