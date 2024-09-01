import { AppRoutes } from "shared/config/routeConfig";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar(props: NavbarProps) {
  const { className } = props;

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className={classNames(cls.wrapper, {}, [])}>
        <div className={cls.linksWrapper}>
          <AppLink theme={AppLinkTheme.PRIMARY} to={AppRoutes.MAIN}>
            Главная
          </AppLink>
          <AppLink theme={AppLinkTheme.PRIMARY} to={AppRoutes.ABOUT}>
            О нас
          </AppLink>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
