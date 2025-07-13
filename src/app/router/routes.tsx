import { createBrowserRouter } from "react-router-dom";
// shared
import { ROUTER_PATHS } from "shared/constants/router-paths";
// widgets
import { HeaderLayout } from "widgets/layout/header-layout";
// pages
import { AboutPageLazy } from "pages/about-page";
import { MainPageLazy } from "pages/main-page";
// local
import { SuspenseWrapper } from "./ui/suspense-wrapper";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderLayout />,
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
    ]
  },
])