"use client";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Footer.module.css"; // Import the CSS module

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className="footer-section">
            <p>&copy; {new Date().getFullYear()} Tilly. All rights reserved.</p>
          </div>

          <div className={styles.footerLinks}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact</a>
          </div>

          <div className={styles.footerThemeToggle}>
            <ThemeToggle />
          </div>
        </div>
      </footer>
  );
}