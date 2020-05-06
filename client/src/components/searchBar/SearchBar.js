import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar () {
  const [search, setSearch] = useState(null);

  function handleSearch ({ target }) {
    setSearch(target.value);
  }

  // TODO: reset input on submit (might not be working because we currently aren't doing anything with the input)
  function submitHandler (event) {
    event.preventDefault();
    setSearch(null);
  }

  return (
    <form className="search-wrapper" onSubmit={submitHandler}>
      <div className="input">
        <div className="icon">
          <SearchIcon />
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search..."
          startIcon={<SearchIcon />}
          onChange={handleSearch}
        />
      </div>
    </form>
  );
}