import { useMemo, useState } from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const defaultThemeValue: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultThemeValue);

  const themeValue = useMemo(() => {
    return {
      theme: theme,
      setTheme: setTheme
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  )
}
