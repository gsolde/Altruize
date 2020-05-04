import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import fakeAuth from '../../FakeAuth';


function AuthButton () {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  return fakeAuth.isAuthenticated ? (
    <button
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}
    >
      Sign out
    </button>
  ) : (
      <button
        onClick={() => {
          fakeAuth.authenticate(() => {
            history.replace(from);
          });
        }}
      >
        Sign in
      </button>
    );
}

function Login () {

  return (
    <div>
      <h1>Login Page!</h1>
      <AuthButton />
    </div>
  );
}

export default Login;
