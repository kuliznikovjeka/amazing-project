import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Loading } from "widgets/Loading";
import { routeConfig } from "shared/config/routeConfig";

export function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
              <Route
                key={path}
                element={element}
                path={path}
              />
            ))}
        </Routes>
    </Suspense>
  )
}

