import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

type RouteType = {
  exact: boolean;
  name: string;
  path: string;
  component: React.ComponentType<any>;
  protected: boolean;
  children?: RouteType[];
};

type AppRoutesProps = {
  routes: RouteType[];
};

const renderRoute = ({
  route,
}: {
  route: RouteType;
}): JSX.Element => (
  <Route
    key={route.name}
    exact={route.exact}
    path={route.path}
    render={(props): JSX.Element => {
      return (
        <route.component location={props.location} history={props.history} match={props.match}>
            <Switch>
              {(Array.isArray(route.children) ? route.children : []).map(
                (child: RouteType): JSX.Element => renderRoute({ route: child }),
              )}
            </Switch>
        </route.component>
      );
    }}
  />
);

const AppRoutes = ({ routes }: AppRoutesProps): JSX.Element => {
  return (
    <Router>
        <Switch>{routes.map(route => renderRoute({ route }))}</Switch>
    </Router>
  );
};

export default AppRoutes;
