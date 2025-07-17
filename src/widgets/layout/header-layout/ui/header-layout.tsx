import { Outlet } from "react-router-dom";
// shared
import { useThemeContext } from "shared/theme";
import { ROUTER_PATHS } from "shared/constants/router-paths";
import { classNames } from "shared/lib/class-names";
import { AppLink } from "shared/ui/app-link";
// widgets
import { ThemeSwitcher } from "widgets/theme-switcher";
// local
import styles from "./header-layout.module.scss";

interface HeaderLayoutProps {
  UNSAFE_classname?: string;
}

export function HeaderLayout(props: HeaderLayoutProps) {
  return (
    <>
      <header className={classNames(styles.header, {}, [props.UNSAFE_classname])}>
        <div className={styles.header__container}>
          <a href="#">Лого</a>
          <nav>
            <ul className={styles.header__list}>
              <li>
                <AppLink to="/">Главная</AppLink>
              </li>
              <li>
                <AppLink to={`/${ROUTER_PATHS.about}`}>О нас</AppLink>
              </li>
            </ul>
          </nav>
          <ThemeSwitcher />
        </div>
      </header>
      <Outlet />
    </>
  );
}
