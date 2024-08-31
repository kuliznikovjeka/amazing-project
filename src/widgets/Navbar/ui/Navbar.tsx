import { useTheme } from "App/providers/ThemeProvider";

import { AppRoutes } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar(props: NavbarProps) {
  const { className } = props;
  const { toggleTheme} = useTheme();

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className={cls.container}>
        <div className={cls.linksWrapper}>
          <AppLink theme={AppLinkTheme.PRIMARY} to={AppRoutes.MAIN}>
            Главная
          </AppLink>
          <AppLink theme={AppLinkTheme.PRIMARY} to={AppRoutes.ABOUT}>
            О нас
          </AppLink>
        </div>
        <button onClick={toggleTheme}>Поменять тему</button>
      </div>
    </header>
  )
}
