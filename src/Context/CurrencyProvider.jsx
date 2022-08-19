import React, { useState, useEffect } from 'react';

import CurrencyContext from './CurrencyContext';

export default function CurrencyProvider({ children }) {
  const [searchBar, setSearchBar] = useState('');
  const [news, setNews] = useState({});
  const contextData = {
    searchBar,
    setSearchBar,
    news,
    setNews,
  };

  const fetchNews = async () => {
    try {
      const api = process.env.REACT_APP_NEWS_API;
      const data = await fetch(api);
      const json = await data.json();
      setNews(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <CurrencyContext.Provider value={ contextData }>
      { children }
    </CurrencyContext.Provider>
  ); 
};
