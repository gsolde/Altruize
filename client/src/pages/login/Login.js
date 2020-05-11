import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isUserLoggedIn, orgId, userId } from '../../actions';
import LoginForm from '../../components/loginForm/LoginForm';
import { useSelector } from 'react-redux';


function Login () {
  const dispatch = useDispatch();
  let history = useHistory();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return isLoggedIn ?
    (
      <div>
        <h1>Logout Page</h1>
        <button
          onClick={() => {
            dispatch(isUserLoggedIn());
            dispatch(userId(''));
            dispatch(orgId(''));
            return history.push("/");
          }}
        >
          Log out
        </button>
      </div>
    ) :
    <LoginForm />;
}

export default Login;
