"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

/**
 * Componente de ejemplo para cambiar entre tema claro y oscuro
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar hidratación mismatch esperando a que el componente se monte en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Renderizar un placeholder durante SSR para evitar mismatch
  if (!mounted) {
    return (
      <button
        className="px-4 py-2 rounded-lg bg-card text-card-fg border border-border hover:bg-accent transition-colors"
        aria-label="Cambiar tema"
        disabled
      >
        <span className="opacity-0">🌙 Modo Oscuro</span>
      </button>
    );
  }

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

