import React, { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
// shared
import { Loading } from "../shared/ui/loading";
import { ROUTER_PATHS } from "../shared/constants/router-paths";
// pages
import { MainPageLazy } from "../pages/main-page";
import { AboutPageLazy } from "../pages/about-page";
// other
import "../style.scss";

export function App() {
  return (
    <div className="app">
      <Link to="/">Главная</Link>
      <Link to={`/${ROUTER_PATHS.about}`}>О нас</Link>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path={`/${ROUTER_PATHS.about}`} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}
