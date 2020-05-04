import React from 'react';
import JobList from '../../components/jobList/JobList';
import SearchBar from '../../components/searchBar/SearchBar';


function Home () {
  return (
    <div className="Home">
      <SearchBar />
      <JobList />
    </div>
  );
}

export default Home;
