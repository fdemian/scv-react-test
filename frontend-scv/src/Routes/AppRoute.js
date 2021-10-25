import React, { Suspense } from "react";
import Loading from '../Loading/LoadingIndicator';
import { Route } from 'react-router-dom';

const AppRoute = ({exact, path, component, isPrivate, key}) => {

  return (
  <Suspense fallback={<Loading />}>
    <Route
      exact={exact}
      path={path}
      component={component}
      key={key}
    />
  </Suspense>
  );
}

export default AppRoute;
