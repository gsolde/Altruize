import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fakeAuth from '../../FakeAuth';
import { isUserLoggedIn, userId, orgId } from '../../actions';


function AuthButton() {
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  return fakeAuth.isAuthenticated ? (
    <button
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}
    >
      Log out
    </button>
  ) : (
      <button
        onClick={() => {
          fakeAuth.authenticate(() => {
            history.replace(from);
          });
          dispatch(isUserLoggedIn());
          dispatch(userId(1));
          dispatch(orgId(1));
        }}
      >
        Log in
      </button>
    );
}

function Login() {
  return (
    <div>
      <h1>Login Page!</h1>
      <AuthButton />
    </div>
  );
}

export default Login;
