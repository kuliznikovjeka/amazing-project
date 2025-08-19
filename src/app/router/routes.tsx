import { createBrowserRouter } from 'react-router-dom';
// shared
import { ROUTER_PATHS } from 'shared/constants/router-paths';
// pages
import { MainPageLazy } from 'pages/main-page';
import { AboutPageLazy } from 'pages/about-page';
import { ErrorPage } from 'pages/error-page';
// local
import { SuspenseWrapper } from './ui/suspense-wrapper';
import { AppContentWithProviders } from '../app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppContentWithProviders />,
    errorElement: <ErrorPage />,
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
