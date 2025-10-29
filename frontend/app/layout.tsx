import "../styles/globals.css";
import { ReactNode } from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "../app/context/AuthContext";
import { ThemeProvider } from "../app/context/ThemeContext";

export const metadata = {
  title: "Tilly",
  description: "Sales and commission tracker for small businesses",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            {/* We'll conditionally render header/footer in the children */}
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}