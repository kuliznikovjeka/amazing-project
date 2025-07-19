import { createBrowserRouter } from 'react-router-dom';
// shared
import { ROUTER_PATHS } from 'shared/constants/router-paths';
// pages
import { AboutPageLazy } from 'pages/about-page';
import { MainPageLazy } from 'pages/main-page';
// local
import { SuspenseWrapper } from './ui/suspense-wrapper';
import { AppContent } from '../app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppContent />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <MainPageLazy />
          </SuspenseWrapper>
        ),
      },
      {
        path: `/${ROUTER_PATHS.about}`,
        element: (
          <SuspenseWrapper>
            <AboutPageLazy />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);
