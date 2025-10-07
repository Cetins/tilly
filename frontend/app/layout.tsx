import "../styles/theme.css";
import { ReactNode } from "react";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import ThemeToggle from "../app/components/ThemeToggle"

export const metadata = {
  title: "Tilly",
  description: "Sales and commission tracker for small businesses",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavMenu/>
        <ThemeToggle />
        <main >{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
