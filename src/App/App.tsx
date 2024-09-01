import { Suspense } from 'react';

import { classNames } from 'shared/lib/classNames'

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Loading } from 'widgets/Loading';

import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'


export function App() {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <div className='page-wrapper'>
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

