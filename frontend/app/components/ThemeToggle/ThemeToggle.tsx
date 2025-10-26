"use client";
import { useTheme } from "@/app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.theme_toggle_button}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}