import React, {useState} from 'react';
import './SearchBar.css';

export default function SearchBar() {
  const [search, setSearch] = useState(null);

  function handleSearch({target}) {
    setSearch(target.value);
  }

  // TODO: reset input on submit (might not be working because we currently aren't doing anything with the input)
  function submitHandler(event) {
    event.preventDefault();
    setSearch(null);
  }

  return (
    <form className="search-wrapper" onSubmit={submitHandler}>
      <input
      className="input"
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
      />
    </form>
  )
}