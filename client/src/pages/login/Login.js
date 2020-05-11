import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fakeAuth from '../../FakeAuth';
import { isUserLoggedIn, userId, orgId } from '../../actions';
import LoginForm from '../../components/loginForm/LoginForm';


function Login () {
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  return fakeAuth.isAuthenticated ?
    (
      <div>
        <h1>Logout Page</h1>
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
            dispatch(isUserLoggedIn());
            dispatch(userId(''));
            dispatch(orgId(''));
          }}
        >
          Log out
        </button>
      </div>
    ) :
    <LoginForm />;
}

export default Login;
