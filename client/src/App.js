import React from 'react';
import './App.css';

import JobList from '../src/components/jobList/JobList';
import Header from '../src/components/header/Header';
import SearchBar from '../src/components/searchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <JobList />
    </div>
  );
}

export default App;
