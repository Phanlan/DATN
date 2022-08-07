import React from 'react';
import {Route} from 'react-router-dom';
import routes from './routes';
// import DefaultLayout from 'layout/DefaultLayout';

export const SecureRoute = (props) => {
  return (
    // <DefaultLayout>
    // <Suspense fallback="Loading...">
    //   <Switch>
    routes.map((route, idx) => {
      return <Route key={idx} path={route.path} exact={route.exact} component={route.component} />;
    })
    //   </Switch>
    // </Suspense>
    // </DefaultLayout>
  );
};

export default SecureRoute;
