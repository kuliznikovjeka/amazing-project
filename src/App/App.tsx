import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { AboutPageLazy } from '../pages/AboutPage/AboutPageLazy'
import { MainPageLazy } from '../pages/MainPage/MainPageLazy'

import Counter from '../components/Counter/Counter'
import Loading from '../components/Loading/Loading'

const routerPaths = {
  about: 'about',
  base: '/'
}

export default function App() {
  return (
    <div className='app'>
      <Link to={routerPaths.base}>Главная</Link>
      <Link to={routerPaths.about}>О нас</Link>
        <Suspense fallback={<Loading />}>
          <Routes>
              <Route path={routerPaths.about} element={<AboutPageLazy />} />
              <Route path={routerPaths.base} element={<MainPageLazy />} />
          </Routes>
        </Suspense>
      <Counter />
    </div>
  )
}
