import React from 'react';
import './Profile.css';
import SignUp from '../signUp/SignUp';
// import ProfileCard from '../../components/profileCard/ProfileCard';
import JobList from '../../components/jobList/JobList';



function Profile () {
  return (
    <div className="profile">
      <div className="card">
        <SignUp />
      </div>
      <div className="dashboard">
        <h1>Upcoming events</h1>
        <JobList />
      </div>
    </div>
  );
}

export default Profile;
