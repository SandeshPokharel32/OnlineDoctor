import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "config/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              component={lazy(() => import(`pages/${component}`))}
            />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
