import React from 'react';
import './Profile.css';
import ProfileCard from '../../components/profileCard/ProfileCard';
import JobList from '../../components/jobList/JobList';



function Profile () {
  return (
    <div className="profile">
      <div className="card">
        <ProfileCard />
      </div>
      <div className="dashboard">
        <h1>My upcoming events</h1>
        <div className="disable-scrollbars">
          <JobList />
        </div>
      </div>
    </div>
  );
}

export default Profile;
