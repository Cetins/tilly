import { ReactNode } from "react";
import Navigation from "../components/NavMenu/NavMenu";
import Footer from "../components/Footer/Footer";
import styles from './AuthPage.module.css'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
      <>
        <header>
          <Navigation />
        </header>
        <main className={styles.auth_layout}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  return (
    <div className="auth-layout">
      {/* Simple layout for auth pages - you can add a special auth header later */}
      <main>{children}</main>
    </div>
  );
}