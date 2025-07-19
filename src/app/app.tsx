import { Outlet } from 'react-router-dom';
// shared
import { classNames } from 'shared/lib/class-names';
import { useThemeContext } from 'shared/theme';
// widgets
import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';
// local
import { ThemeProvider } from './providers/theme-provider';
import { RouterProvider } from './providers/router-provider';
import './styles/style.scss';

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
}

export function AppContent() {
  const { theme } = useThemeContext();

  return (
    <div className={classNames('app', {}, [theme])}>
      <div className="app-container">
        <Header />
        <div className="app-wrapper">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
