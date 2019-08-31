import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import Profile from '../Profile';
import Logout from '../Logout';
import Map from '../Map';

// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/logout" component={Logout} />
        <PrivateRoute path="/map" component={Map} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Router;
