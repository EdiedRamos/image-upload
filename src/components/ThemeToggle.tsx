"use client";

import { Moon, Sun } from "@/images";

import { useState } from "react";

type Theme = "light" | "dark";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={handleTheme} className="border-2 rounded-lg p-3">
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};
