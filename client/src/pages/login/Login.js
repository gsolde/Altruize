import React from 'react';
import LoginForm from '../../components/loginForm/LoginForm';

function Login () {
<<<<<<< HEAD
  const dispatch = useDispatch();
  let history = useHistory();
<<<<<<< HEAD
<<<<<<< HEAD
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };
=======
>>>>>>> feat: login page and component working
=======
  const isLoggedIn = useSelector(state => state.isLoggedIn);
>>>>>>> chore: Delete FakeAuth file (no need with proper login)
=======
>>>>>>> feat: FrontEnd: Navbar logout button directly logsout

  return (
    <LoginForm />
  );
}

export default Login;
