"use client";

import { Moon, Sun } from "@/images";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const DEFAULT_THEME: Theme = "light";

function isTheme(value: string): value is Theme {
  return ["light", "dark"].includes(value);
}

function getThemeFromLS(): Theme {
  const loadThemeFromLS = localStorage.getItem("theme");
  if (!loadThemeFromLS) return DEFAULT_THEME;
  return isTheme(loadThemeFromLS) ? loadThemeFromLS : DEFAULT_THEME;
}

function saveThemeToLS(theme: Theme) {
  localStorage.setItem("theme", theme);
}

function getOppositeTheme(theme: Theme): Theme {
  return theme === "light" ? "dark" : "light";
}

function updateThemeUI(theme: Theme): void {
  const rootTag = document.getElementById("root-tag");
  rootTag?.classList[theme === "light" ? "remove" : "add"]("dark");
}

function toggleTheme(theme: Theme): Theme {
  const nextTheme = getOppositeTheme(theme);
  updateThemeUI(nextTheme);
  saveThemeToLS(nextTheme);
  return nextTheme;
}

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  const handleTheme = () => {
    setTheme(toggleTheme);
  };

  useEffect(() => {
    const savedTheme = getThemeFromLS();
    updateThemeUI(savedTheme);
    setTheme(savedTheme);
  }, []);

  return (
    <button
      onClick={handleTheme}
      className="border-[1px] dark:border-cc-outer-space-light bg-cc-white dark:bg-cc-outer-space rounded-lg p-2"
    >
      {theme === "light" ? (
        <Moon className="text-cc-outer-space" />
      ) : (
        <Sun className="text-white" />
      )}
    </button>
  );
};
