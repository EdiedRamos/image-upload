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
  const [theme, setTheme] = useState<Theme>(getThemeFromLS());

  const handleTheme = () => {
    setTheme(toggleTheme);
  };

  useEffect(() => {
    updateThemeUI(getThemeFromLS());
  }, []);

  return (
    <button onClick={handleTheme} className="border-2 rounded-lg p-3">
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};
