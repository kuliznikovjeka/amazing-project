import { createContext, useContext } from 'react';
import { TThemeValues } from '../model/theme-variants';

export interface ThemeContextValues {
  theme: TThemeValues;
  setTheme: (theme: TThemeValues) => void;
  toggleTheme: () => void;
}
export const THEME_LOCAL_STORAGE_KEY = 'theme';
export const ThemeContext = createContext<ThemeContextValues>({} as ThemeContextValues);
export const useThemeContext = () => useContext(ThemeContext);
