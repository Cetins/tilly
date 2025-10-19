import "../styles/theme.css";
import "../styles/components.css";
import { ReactNode } from "react";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import { AuthProvider } from "../app/context/AuthContext";

export const metadata = {
  title: "Tilly",
  description: "Sales and commission tracker for small businesses",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <header>
            <NavMenu />
          </header>

          <main>{children}</main>

          <footer>
            <Footer />
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
