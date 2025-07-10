export const THEME_VARIANTS = {
  LIGHT: "light",
  DARK: "dark",
} as const;

type TThemeValues = (typeof THEME_VARIANTS)[keyof typeof THEME_VARIANTS];

export type { TThemeValues };
