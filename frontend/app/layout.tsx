import "../styles/globals.css";
import { ReactNode } from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "../app/context/AuthContext";
import { ThemeProvider } from "../app/context/ThemeContext"; // Add this import

export const metadata = {
  title: "Tilly",
  description: "Sales and commission tracker for small businesses",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider> {/* Add ThemeProvider here */}
          <AuthProvider>
            <header>
              <NavMenu />
            </header>

            <main>{children}</main>

            <footer>
              <Footer />
            </footer>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}