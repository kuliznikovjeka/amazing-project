export const THEME_VARIANTS = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type TThemeValues = (typeof THEME_VARIANTS)[keyof typeof THEME_VARIANTS];
