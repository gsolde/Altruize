import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function PrivateRoute ({ children, ...rest }) {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
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