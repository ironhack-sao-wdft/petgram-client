import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

function PrivateRoute({ component, ...rest }) {
  const Component = component;

  const authContext = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (authContext.loggedInUser.user) {
          return <Component {...routeProps} {...rest} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: routeProps.location } }}
            />
          );
        }
      }}
    />
  );
}

export default PrivateRoute;
