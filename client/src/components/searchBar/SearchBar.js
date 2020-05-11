import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import { filterEvents } from '../../services/EventsAPI' 
import { useDispatch } from 'react-redux';
import { searchedEventsList } from '../../actions';

export default function SearchBar () {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  function handleSearch (e) {
    const inputValue = e.target.value
    setSearchInput(inputValue);
  }

  const getSearchedEvents = async () => {
    const eventsList = await filterEvents({ search_input: searchInput});
    dispatch(searchedEventsList(eventsList));
  }

  useEffect(() => {
    getSearchedEvents();
  })

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
          onKeyUp={handleSearch}
        />
      </div>
    </form>
  );
}