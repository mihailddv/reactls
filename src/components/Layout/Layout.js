import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Login";
import Profile from "../Profile";
import MapLayout from "../MapLayout";
import PrivateRoute from "../PrivateRoute";

class Layout extends Component {
  render() {
    const { isAuthorized } = this.props;
    return (
      <>
        <Switch>
          <PrivateRoute
            path="/map"
            component={MapLayout}
            startUrl="/login"
            isAuthorized={isAuthorized}
          />
          <Route path="/login" component={Login} />
          {isAuthorized && <Route path="/profile" component={Profile} />}
          <Redirect to="/login" />
        </Switch>
      </>
    );
  }
}

export default Layout;
