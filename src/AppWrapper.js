import React, {useEffect} from 'react';
import {Route, withRouter, useLocation} from 'react-router-dom';

import { App } from './App';
// import Login from './pages/Login';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';

const AppWrapper = (props) => {
  let location = useLocation();
//   const isLogin = useSelector((state) => state.authReducer.isLogin);

//   const apiKey = authService.getApiKeyLocalStorage();
//   console.log('isLogin', isLogin, apiKey);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  switch (props.location.pathname) {
    // case '/login':
    //   return <Route path="/login" component={Login} />;
    case '/error':
      return <Route path="/error" component={Error} />;
    case '/notfound':
      return <Route path="/notfound" component={NotFound} />;
    case '/unauthorized':
      return <Route path="/unauthorized" component={Unauthorized} />;
    default:
      return <App />;
  }
// return(
// 	<BrowserRouter>
// 	<Switch>
// 	  <Route path={RouteBase.Login} exact component={LoginPage} />
// 	  <PrivateRoute path={RouteBase.Home} component={SecureRoute} />
// 	</Switch>
//   </BrowserRouter>
// )
};

export default withRouter(AppWrapper);
