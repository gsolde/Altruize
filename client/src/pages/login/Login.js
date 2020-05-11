import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fakeAuth from '../../FakeAuth';
import {
  isUserLoggedIn,
  userId,
  orgId,
  tags,
  orgInfo,
  userInfo,
} from '../../actions';
import { getAllTags } from '../../services/TagsAPI';
import { getOrgByName } from '../../services/OrgsAPI';
import { getUserByName } from '../../services/UsersAPI';

function AuthButton() {
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  return fakeAuth.isAuthenticated ? (
    <button
      onClick={() => {
        fakeAuth.signout(() => history.push('/'));
      }}
    >
      Log out
    </button>
  ) : (
    <button
      onClick={async () => {
        fakeAuth.authenticate(() => {
          history.replace(from);
        });
        const allTags = await getAllTags();
        const loggedInOrg = await getOrgByName({ org_name: 'Greenpace' }); //Update for the actual Org or User Log in when ready.
        const loggedInUser = await getUserByName({ user_name: 'Gerard' }); //Update for the actual Org or User Log in when ready.

        dispatch(isUserLoggedIn());
        dispatch(userId(1));
        dispatch(orgId(1));
        dispatch(tags(allTags));
        dispatch(orgInfo(loggedInOrg));
        dispatch(userInfo(loggedInUser));
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
