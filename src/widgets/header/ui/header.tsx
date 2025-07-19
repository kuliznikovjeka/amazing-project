// shared
import { ROUTER_PATHS } from 'shared/constants/router-paths';
import { classNames } from 'shared/lib/class-names';
import { AppLink } from 'shared/ui/app-link';
// local
import styles from './header.module.scss';

interface HeaderProps {
  UNSAFE_classname?: string;
}

export function Header(props: HeaderProps) {
  return (
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
      </div>
    </header>
  );
}
