import React, { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
// shared
import { Loading } from "../shared/ui/loading";
import { ROUTER_PATHS } from "../shared/constants/router-paths";
import { useThemeContext } from "../shared/theme";
import { classNames } from "../shared/lib";
// pages
import { MainPageLazy } from "../pages/main-page";
import { AboutPageLazy } from "../pages/about-page";
// styles
import "../shared/styles/style.scss";

export function App() {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Главная</Link>
      <Link to={`/${ROUTER_PATHS.about}`}>О нас</Link>
      <button onClick={toggleTheme}>Переключатель темы</button>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path={`/${ROUTER_PATHS.about}`} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}
