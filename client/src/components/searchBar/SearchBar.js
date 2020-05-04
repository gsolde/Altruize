import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-wrapper">
      <input className="input" type="text" placeholder="Search..." />
    </div>
  )
}