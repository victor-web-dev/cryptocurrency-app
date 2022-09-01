import React, { useState, useEffect } from 'react';
import { search } from "../../../Services/searchBar";
import SearchResult from './helper/SearchResults';

export default function SearchInput() {
  const [searchBar, setSearchBar] = useState('');
  const [coinsData, setCoinsData] = useState([]);
  const [load, setLoad] = useState(false);

  const onChangeSearchHandler = ({ target }) => {
    setSearchBar(target.value);
  }

  useEffect(() => {
    const seekData = async () => {
      if (searchBar.length >= 3) {
        setLoad(false);
        const data = await search(searchBar);
        setCoinsData(data);
        setLoad(true);
        return;
      }
      setLoad(false);
    }
    seekData()
  }, [searchBar]);

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
        {
          load ? <SearchResult results={coinsData}/> : ""
        }
      </div>
  );
}