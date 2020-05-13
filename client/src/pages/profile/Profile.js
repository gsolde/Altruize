import React from 'react';
import './Profile.css';
import ProfileCard from '../../components/profileCard/ProfileCard';
import ProfileCardOrg from '../../components/profileCardOrg/ProfileCardOrg';
import { useSelector } from 'react-redux';
function Profile() {
  const orgInfo = useSelector((state) => state.orgInfo);
  const isOrg = orgInfo.id ? true : false;

  return (
    <div className="profile">
      <div className="card">{isOrg ? <ProfileCardOrg /> : <ProfileCard />}</div>
    </div>
  );
}

export default Profile;
