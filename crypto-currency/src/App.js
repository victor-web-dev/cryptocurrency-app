import React from 'react';
import CurrencyProvider from './Context/CurrencyProvider';
import Header from './Components/Header';


function App() {
  return (
    <>
      <CurrencyProvider>
        <Header />
      </CurrencyProvider>
    </>
  );
}

export default App;
