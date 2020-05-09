import React from 'react';
import JobList from '../../components/jobList/JobList';
import SearchBar from '../../components/searchBar/SearchBar';
import ListMenu from '../../components/listMenu/ListMenu';


function Home() {
  return (
    <div className="Home">
      <SearchBar />
      <ListMenu />
      <JobList />
    </div>
  );
}

export default Home;
