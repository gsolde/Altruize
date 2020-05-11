import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isUserLoggedIn, orgId, userId } from '../../actions';
import LoginForm from '../../components/loginForm/LoginForm';
import fakeAuth from '../../FakeAuth';


function Login () {
  const dispatch = useDispatch();
  let history = useHistory();
<<<<<<< HEAD
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };
=======
>>>>>>> feat: login page and component working

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
