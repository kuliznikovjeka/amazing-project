// shared
import { classNames } from 'shared/lib/class-names';
import { useThemeContext } from 'shared/theme';
// local
import { ThemeProvider } from './providers/theme-provider';
import { RouterProvider } from './providers/router-provider';
import "./styles/style.scss";


export function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

function AppRoutes() {
  const { theme } = useThemeContext();

  return (
    <div className={classNames("app", {}, [theme])}>
      <RouterProvider />
    </div>
  )
}

