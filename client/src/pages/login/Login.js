import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isUserLoggedIn } from '../../actions';
import fakeAuth from '../../FakeAuth';


function AuthButton () {
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // const loggedIn = useSelector((state) => state.isUserLoggedIn);

  return fakeAuth.isAuthenticated ? (
    <button
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
        dispatch(isUserLoggedIn());
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
        }}
      >
        Log in
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
