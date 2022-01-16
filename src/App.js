import React from 'react';
import CurrencyProvider from './Context/CurrencyProvider';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

function App() {
  return (
    <>
      <CurrencyProvider>
        <Header />
        <MainContent />
      </CurrencyProvider>
    </>
  );
}

export default App;
