import React, { useState } from 'react';

export default function SearchInput() {
  const [searchBar, setSearchBar] = useState('');
  
  const onChangeSearchHandler = ({ target }) => {
    setSearchBar(target.value);
  }

  return (
    <div>
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder='Search...'
          className="header-searchBar"
          value={ searchBar }
          onChange={  onChangeSearchHandler }
        />
      </div>
  );
}