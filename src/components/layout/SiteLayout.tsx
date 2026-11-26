import type { ReactNode } from "react";
import type { SearchIndexItem } from "@/lib/search-index";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface SiteLayoutProps {
  children: ReactNode;
  searchItems?: SearchIndexItem[];
}

export function SiteLayout({ children, searchItems }: SiteLayoutProps) {
  return (
    <>
      <Navbar searchItems={searchItems} />
      <main id="main-content" className="min-h-screen pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
