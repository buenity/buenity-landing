/**
 * Sistema centralizado de colores y temas
 *
 * LÓGICA DE CENTRALIZACIÓN:
 * 1. Todos los colores se definen aquí en un solo lugar
 * 2. Se separan por tema (light/dark) para facilitar el mantenimiento
 * 3. Los colores de marca (primary, secondary, etc.) son constantes entre temas
 * 4. Los colores de UI (bg, fg, card, etc.) cambian según el tema
 * 5. Este archivo se usa para:
 *    - Generar variables CSS en globals.css
 *    - Usar en componentes TypeScript/JavaScript
 *    - Configurar Tailwind CSS
 */

// ============================================
// COLORES DE MARCA (Constantes - no cambian con el tema)
// ============================================
export const BRAND_COLORS = {
  primary: "#FFD60A", // Color principal de la marca - usado en botones principales, acentos
  secondary: "#000000", // Color secundario - usado en textos importantes, bordes
  tertiary: "#FFFDE7", // Color terciario - usado en fondos suaves, destacados
  green: "#19C267", // Verde de éxito - usado en estados positivos, confirmaciones
  darkGray: "#262B31", // Gris oscuro - usado en textos, fondos oscuros
  lightGray: "#E8E8E8", // Gris claro - usado en fondos, separadores
} as const;

export const PALETTE = BRAND_COLORS;

// ============================================
// TEMA CLARO
// ============================================
export const LIGHT_THEME = {
  // Backgrounds y textos principales
  background: "#E8E8E8", // Color de fondo principal de la aplicación
  foreground: "#262B31", // Color de texto principal sobre el fondo

  // UI Component Colors
  bg: "#E8E8E8", // Color de fondo para componentes (alias de background)
  fg: "#262B31", // Color de texto para componentes (alias de foreground)
  card: "#ffffff", // Color de fondo para tarjetas, paneles, modales
  cardFg: "#262B31", // Color de texto dentro de tarjetas
  popover: "#ffffff", // Color de fondo para popovers, tooltips, dropdowns
  popoverFg: "#262B31", // Color de texto dentro de popovers
  muted: "#E8E8E8", // Color de fondo para elementos deshabilitados o secundarios
  mutedFg: "#747474", // Color de texto para elementos deshabilitados o secundarios

  // Text Colors - Jerarquía de texto
  textPrimary: "#262B31", // Color de texto principal - usado en títulos, headings, textos importantes
  textSecondary: "#4b5563", // Color de texto secundario - usado en body text, descripciones
  textTertiary: "#6b7280", // Color de texto terciario - usado en captions, labels pequeños, metadata
  textMuted: "#9ca3af", // Color de texto deshabilitado - usado en elementos deshabilitados, placeholders
  textInverse: "#ffffff", // Color de texto invertido - usado sobre fondos oscuros o colores primarios
  textLink: "#F84715", // Color para enlaces - usado en links, anchor tags
  textLinkHover: "#d63a0f", // Color para enlaces en hover - usado en estados hover de links
  textPlaceholder: "#9ca3af", // Color para placeholders - usado en inputs, textareas cuando están vacíos

  // Utility & Form Colors
  border: "#d1d5db", // Color de bordes para inputs, cards, separadores
  input: "#ffffff", // Color de fondo para inputs, textareas, selects
  ring: "#F84715", // Color del anillo de focus en inputs y elementos interactivos
  accent: "#f3f4f6", // Color de fondo para elementos destacados, hover states
  accentFg: "#262B31", // Color de texto sobre elementos destacados

  // Sidebar & Navigation
  sidebarBg: "#ffffff", // Color de fondo del sidebar/navegación lateral
  sidebarFg: "#262B31", // Color de texto del sidebar
  sidebarPrimary: BRAND_COLORS.primary, // Color principal para elementos activos en sidebar
  sidebarPrimaryFg: "#ffffff", // Color de texto sobre elementos primarios del sidebar
  sidebarAccent: "#f3f4f6", // Color de fondo para elementos hover/activos en sidebar
  sidebarAccentFg: BRAND_COLORS.primary, // Color de texto para elementos hover/activos en sidebar
  sidebarBorder: "#e5e7eb", // Color de borde del sidebar
  sidebarRing: BRAND_COLORS.primary, // Color del anillo de focus en elementos del sidebar
} as const;

// ============================================
// TEMA OSCURO
// ============================================
export const DARK_THEME = {
  // Backgrounds y textos principales
  background: "#262B31", // Color de fondo principal de la aplicación (modo oscuro)
  foreground: "#E8E8E8", // Color de texto principal sobre el fondo (modo oscuro)

  // UI Component Colors
  bg: "#262B31", // Color de fondo para componentes (alias de background)
  fg: "#E8E8E8", // Color de texto para componentes (alias de foreground)
  card: "#2d333a", // Color de fondo para tarjetas, paneles, modales (modo oscuro)
  cardFg: "#ffffff", // Color de texto dentro de tarjetas (modo oscuro)
  popover: "#2d333a", // Color de fondo para popovers, tooltips, dropdowns (modo oscuro)
  popoverFg: "#ffffff", // Color de texto dentro de popovers (modo oscuro)
  muted: "#353c45", // Color de fondo para elementos deshabilitados o secundarios (modo oscuro)
  mutedFg: "#aeaeae", // Color de texto para elementos deshabilitados o secundarios (modo oscuro)

  // Text Colors - Jerarquía de texto
  textPrimary: "#ffffff", // Color de texto principal - usado en títulos, headings, textos importantes (modo oscuro)
  textSecondary: "#d1d5db", // Color de texto secundario - usado en body text, descripciones (modo oscuro)
  textTertiary: "#9ca3af", // Color de texto terciario - usado en captions, labels pequeños, metadata (modo oscuro)
  textMuted: "#6b7280", // Color de texto deshabilitado - usado en elementos deshabilitados, placeholders (modo oscuro)
  textInverse: "#262B31", // Color de texto invertido - usado sobre fondos claros o colores primarios (modo oscuro)
  textLink: "#f96c44", // Color para enlaces - usado en links, anchor tags (modo oscuro)
  textLinkHover: "#fb9173", // Color para enlaces en hover - usado en estados hover de links (modo oscuro)
  textPlaceholder: "#6b7280", // Color para placeholders - usado en inputs, textareas cuando están vacíos (modo oscuro)

  // Utility & Form Colors
  border: "#454e59", // Color de bordes para inputs, cards, separadores (modo oscuro)
  input: "#2D333A", // Color de fondo para inputs, textareas, selects (modo oscuro)
  ring: "#f96c44", // Color del anillo de focus en inputs y elementos interactivos (modo oscuro)
  accent: "#1c2025", // Color de fondo para elementos destacados, hover states (modo oscuro)
  accentFg: "#f6f6f6", // Color de texto sobre elementos destacados (modo oscuro)

  // Sidebar & Navigation
  sidebarBg: "#2d333a", // Color de fondo del sidebar/navegación lateral (modo oscuro)
  sidebarFg: "#ffffff", // Color de texto del sidebar (modo oscuro)
  sidebarPrimary: BRAND_COLORS.primary, // Color principal para elementos activos en sidebar
  sidebarPrimaryFg: "#ffffff", // Color de texto sobre elementos primarios del sidebar
  sidebarAccent: "#3d454f", // Color de fondo para elementos hover/activos en sidebar (modo oscuro)
  sidebarAccentFg: "#fb9173", // Color de texto para elementos hover/activos en sidebar (modo oscuro)
  sidebarBorder: "#454e59", // Color de borde del sidebar (modo oscuro)
  sidebarRing: BRAND_COLORS.primary, // Color del anillo de focus en elementos del sidebar
} as const;

// ============================================
// STATUS & FEEDBACK COLORS (Constantes)
// ============================================
export const STATUS_COLORS = {
  destructive: "#F72C16", // Rojo intenso - usado en botones de eliminación, acciones destructivas
  destructiveFg: "#ffffff", // Color de texto sobre acciones destructivas (blanco para contraste)
  error: "#F72C16", // Rojo para errores/validaciones - usado en mensajes de error, campos inválidos
  errorFg: "#ffffff", // Color de texto sobre errores (blanco para contraste)
  success: BRAND_COLORS.green, // Verde de éxito - usado en mensajes de éxito, confirmaciones
  successFg: "#ffffff", // Color de texto sobre éxito (blanco para contraste)
  warning: "#F4BF3B", // Amarillo para advertencias - usado en alertas, avisos importantes
  warningFg: "#000000", // Color de texto sobre advertencias (negro para contraste)
  info: BRAND_COLORS.lightGray, // Gris claro para información - usado en mensajes informativos
  infoFg: BRAND_COLORS.darkGray, // Color de texto sobre información (gris oscuro para contraste)
} as const;

// ============================================
// TIPOS PARA TYPESCRIPT
// ============================================
export type ThemeMode = "light" | "dark";
export type BrandColor = keyof typeof BRAND_COLORS;
export type StatusColor = keyof typeof STATUS_COLORS;
export type ThemeColorKey = keyof typeof LIGHT_THEME;

// ============================================
// EXPORTACIÓN UNIFICADA PARA FACILITAR EL USO
// ============================================
export const THEME = {
  // Colores de marca (constantes)
  ...BRAND_COLORS,

  // Colores de estado (constantes)
  ...STATUS_COLORS,

  // Funciones helper para obtener colores según el tema
  getThemeColors: (theme: ThemeMode = "light") => {
    return theme === "light" ? LIGHT_THEME : DARK_THEME;
  },

  // Obtener color de marca
  getBrandColor: (color: BrandColor) => {
    return BRAND_COLORS[color];
  },

  // Obtener color de estado
  getStatusColor: (status: StatusColor) => {
    return STATUS_COLORS[status];
  },

  // Obtener todos los colores de un tema
  getColors: (theme: ThemeMode = "light") => {
    const themeColors = THEME.getThemeColors(theme);
    return {
      ...BRAND_COLORS,
      ...STATUS_COLORS,
      ...themeColors,
    };
  },
} as const;

// ============================================
// HELPERS Y UTILIDADES
// ============================================

/**
 * Obtiene el color de fondo según el tema
 */
export const getBackgroundColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).background;
};

/**
 * Obtiene el color de texto según el tema
 */
export const getForegroundColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).foreground;
};

/**
 * Obtiene el color de borde según el tema
 */
export const getBorderColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).border;
};

/**
 * Obtiene el color de input según el tema
 */
export const getInputColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).input;
};

/**
 * Obtiene el color de ring (focus) según el tema
 */
export const getRingColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).ring;
};

/**
 * Obtiene el color de card según el tema
 */
export const getCardColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).card;
};

/**
 * Obtiene el color de texto de card según el tema
 */
export const getCardFgColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).cardFg;
};

/**
 * Obtiene el color de texto principal según el tema
 */
export const getTextPrimaryColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).textPrimary;
};

/**
 * Obtiene el color de texto secundario según el tema
 */
export const getTextSecondaryColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).textSecondary;
};

/**
 * Obtiene el color de texto terciario según el tema
 */
export const getTextTertiaryColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).textTertiary;
};

/**
 * Obtiene el color de texto deshabilitado según el tema
 */
export const getTextMutedColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).textMuted;
};

/**
 * Obtiene el color de texto invertido según el tema
 */
export const getTextInverseColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).textInverse;
};

/**
 * Obtiene el color de enlaces según el tema
 */
export const getTextLinkColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).textLink;
};

/**
 * Obtiene el color de enlaces en hover según el tema
 */
export const getTextLinkHoverColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).textLinkHover;
};

/**
 * Obtiene el color de placeholder según el tema
 */
export const getTextPlaceholderColor = (theme: ThemeMode = "light"): string => {
  return THEME.getThemeColors(theme).textPlaceholder;
};
