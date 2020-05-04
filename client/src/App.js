import React from 'react';
import './App.css';

import JobList from '../src/components/jobList/JobList';
import Header from '../src/components/header/Header';
import SearchBar from '../src/components/searchBar/SearchBar';
import Footer from '../src/components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Header />
        <SearchBar />
        <JobList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
