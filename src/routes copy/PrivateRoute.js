import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import authService from '../service/authService';
import {RouteURL} from './RouteUrl';

const PrivateRoute = (props) => {
  const isLogin = useSelector((state) => state.authReducer.isLogin);

  const apiKey = authService.getApiKeyLocalStorage();
  console.log('isLogin', isLogin, apiKey);

  // Render
  if (apiKey || isLogin) {
    return <Route {...props} />;
  }

  return <Redirect to={RouteURL.Login} />;
};

export default PrivateRoute;
