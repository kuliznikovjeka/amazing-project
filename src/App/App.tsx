import { classNames } from 'shared/lib/classNames'

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'

export function App() {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <div className='page-wrapper'>
          <AppRouter />
        </div>
      <div>
      </div>
      </div>
    </div>
  )
}

