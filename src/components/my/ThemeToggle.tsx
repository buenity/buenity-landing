"use client";

import { useTheme } from "@/hooks/useTheme";

/**
 * Componente de ejemplo para cambiar entre tema claro y oscuro
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-card text-card-fg border border-border hover:bg-accent transition-colors"
      aria-label={`Cambiar a tema ${theme === "light" ? "oscuro" : "claro"}`}
    >
      {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
}

