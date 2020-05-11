import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';

import { filterEvents } from '../../services/EventsAPI' 

export default function SearchBar () {
  const [searchInput, setSearchInput] = useState(null);

  function handleSearch ({ target }) {
    setSearchInput(target.value);
    getSearchedEvents();
    console.log('***',searchInput);
  }

  const getSearchedEvents = async () => {
    const eventsList = await filterEvents({ search_input: searchInput});
    console.log('!!!!',eventsList);
  }

  return (
    <form className="search-wrapper">
      <div className="input">
        <div className="icon">
          <SearchIcon />
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
    </form>
  );
}