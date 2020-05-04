import React from 'react';

import JobList from '../components/jobList/JobList';
import Nav from '../components/Nav/Nav';
import SearchBar from '../components/searchBar/SearchBar';

function Home () {
  return (
    <div className="Home">
      <SearchBar />
      <JobList />
    </div>
  );
}

export default Home;
