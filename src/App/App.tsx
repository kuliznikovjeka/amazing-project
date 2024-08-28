import { Link,  } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';

import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'

export function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Поменять тему</button>
      <Link to={AppRoutes.MAIN}>Главная</Link>
      <Link to={AppRoutes.ABOUT}>О нас</Link>
      <AppRouter />
    </div>
  )
}
