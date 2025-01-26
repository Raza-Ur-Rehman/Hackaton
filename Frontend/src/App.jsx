import { Route, Routes, Navigate } from "react-router-dom";

import routes from "./Routes/router";

const App = () => {
  return (
    <div>
      <Routes>
        {routes.map((route, key) => {
          return (
            route.children ? (
              // Handle nested routes for /dashboard
              <Route key={key} path={route.path} element={route.element}>
                {route.children.map((child, childKey) => (
                  <Route
                    key={childKey}
                    path={child.path}
                    element={child.element}
                  />
                ))}
              </Route>
            ) : (
              // Handle main routes like Home
              <Route key={key} path={route.path} element={route.element} />
            )
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
