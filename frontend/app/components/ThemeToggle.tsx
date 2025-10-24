"use client";
import { useTheme } from "@/app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button"
      aria-label="Toggle theme"
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}