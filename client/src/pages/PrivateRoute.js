import React from 'react';
import { Redirect, Route } from "react-router-dom";


export default function PrivateRoute ({ children, ...rest }) {
  const isLoggedIn = localStorage.getItem('altruize-token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}