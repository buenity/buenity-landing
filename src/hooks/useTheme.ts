"use client";

import { useTheme as useNextTheme } from "next-themes";
import { type ThemeMode } from "@/constants/theme/theme";

/**
 * Hook personalizado para manejar el tema de la aplicación
 * Extiende next-themes con tipos específicos de nuestro sistema de temas
 */
export function useTheme() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();

  const currentTheme = (resolvedTheme || theme || "light") as ThemeMode;

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return {
    theme: currentTheme,
    setTheme: setTheme as (theme: ThemeMode) => void,
    toggleTheme,
    resolvedTheme: resolvedTheme as ThemeMode | undefined,
    systemTheme: systemTheme as ThemeMode | undefined,
  };
}

