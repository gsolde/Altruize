import React from 'react';
import JobList from '../../components/jobList/JobList';
import SearchBar from '../../components/searchBar/SearchBar';
import ListMenu from '../../components/listMenu/ListMenu';

import { useSelector } from 'react-redux';

function Home() {

  const eventQuerySelector = useSelector((state) => state.eventSelectionButton);

  if (eventQuerySelector === 'ALL EVENTS') {
    return (
      <div className="Home">
        <ListMenu />
        <SearchBar />
        <JobList />
      </div>
    );
  } else if (eventQuerySelector === 'MY EVENTS'){
      return (
        <div className="Home">
          <ListMenu />
          <JobList />
        </div>
      );
  }
}

export default Home;
