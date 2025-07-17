// shared
import { useThemeContext } from "shared/theme";
import { Button } from "shared/ui/button";
import ThemeDark from "shared/assets/icons/theme-dark.svg";
import ThemeLight from "shared/assets/icons/theme-light.svg";

interface ThemeSwitcherProps {
  UNSAFE_classname?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <Button UNSAFE_classnames={props.UNSAFE_classname} variant="clear" onClick={toggleTheme}>
      {theme === "dark" ? <ThemeDark /> : <ThemeLight />}
    </Button>
  );
}
