import React from 'react'
import { Link, Outlet } from 'react-router-dom';
// shared
import { useThemeContext } from 'shared/theme';
import { ROUTER_PATHS } from 'shared/constants/router-paths';
// local
import styles from './header-layout.module.scss';

export function HeaderLayout() {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <a href='#'>
            Лого
          </a>
          <nav>
            <ul className={styles.header__list}>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to={`/${ROUTER_PATHS.about}`}>О нас</Link>
              </li>
            </ul>
          </nav>
        <button onClick={toggleTheme}>Переключатель темы</button>
        </div>
      </header>
      <Outlet />
    </>
  )
}
