import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { AboutPageLazy } from 'pages/AboutPage'
import { MainPageLazy } from 'pages/MainPage'

import { Loading } from 'widgets/loading'
import { classNames } from 'shared/lib/classNames/classNames'

import { useTheme } from './providers/ThemeProvider'

const routerPaths = {
  about: 'about',
  base: '/'
}

export function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Поменять тему</button>
      <Link to={routerPaths.base}>Главная</Link>
      <Link to={routerPaths.about}>О нас</Link>
        <Suspense fallback={<Loading />}>
          <Routes>
              <Route path={routerPaths.about} element={<AboutPageLazy />} />
              <Route path={routerPaths.base} element={<MainPageLazy />} />
          </Routes>
        </Suspense>
    </div>
  )
}
