import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const {
      component: PrivateComponent,
      isAuthorized,
      startUrl,
      path
    } = this.props;
    return (
      <Route
        path={path}
        render={props =>
          isAuthorized ? (
            <PrivateComponent {...props} />
          ) : (
            <Redirect to={startUrl} />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
