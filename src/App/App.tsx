import { classNames } from 'shared/lib/classNames/classNames'

import { Navbar } from 'widgets/Navbar';

import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'

export function App() {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

