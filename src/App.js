import React from 'react';
import Router from "./Routes/Router"
import CurrencyProvider from './Context/CurrencyProvider';

function App() {
  return (
    <CurrencyProvider>
      <Router />
    </CurrencyProvider>
  )
}

export default App;
