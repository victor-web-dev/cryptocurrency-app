import React, { useState } from 'react';
import CurrencyContext from './CurrencyContext';

export default function CurrencyProvider({ children }) {
  const [searchBar, setSearchBar] = useState('');

  const contextData = {
    searchBar,
    setSearchBar,
  };

  return (
    <CurrencyContext.Provider value={ contextData }>
      { children }
    </CurrencyContext.Provider>
  ); 
};
