import { ReactNode } from "react";
import Navigation from "../components/NavMenu/NavMenu";
import Footer from "../components/Footer/Footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}