import React, { ReactNode, useState } from "react";
import { THEME_LOCAL_STORAGE_KEY, ThemeContext, ThemeContextValues } from "./theme-context";
import { TThemeValues } from "../model/theme-variants";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const themeDefaultValue: TThemeValues =
    (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as TThemeValues) || "light";

  const [theme, setTheme] = useState<TThemeValues>(themeDefaultValue);

  const toggleTheme = () => {
    const newTheme: TThemeValues = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
  };

  const providerValues: ThemeContextValues = {
    theme,
    setTheme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={providerValues}>{props.children}</ThemeContext.Provider>;
}
