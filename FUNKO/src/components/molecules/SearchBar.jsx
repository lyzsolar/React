import React from 'react';
const SearchBar = ({ logo }) => {
  return (
    <div className="search-bar">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default SearchBar;
