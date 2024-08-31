
import { Theme, useTheme } from 'App/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';

import { Button, ThemeButton } from 'shared/ui/Button';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
      <Button
        theme={ThemeButton.DEFAULT}
        onClick={toggleTheme}
        className={classNames(cls.ThemeSwitcher, {}, [className])}
      >
        {theme === Theme.DARK ? (
          <LightIcon />
        ) : (
          <DarkIcon />
        )}
      </Button>
  );
}