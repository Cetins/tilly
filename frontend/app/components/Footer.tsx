"use client";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
      <div className="footer-content">
        {/* Your existing footer content */}
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} Tilly. All rights reserved.</p>
        </div>
        
        {/* Other footer links or content */}
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Add ThemeToggle to footer */}
        <div className="footer-theme-toggle">
          <ThemeToggle />
        </div>
      </div>
  );
}