import React from 'react';
import CurrencyProvider from './Context/CurrencyProvider';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import NewsTab from './Components/NewsTab';

function App() {
  return (
    <>
      <CurrencyProvider>
        <Header />
        <MainContent>
          <NewsTab />
        </MainContent>
      </CurrencyProvider>
    </>
  );
}

export default App;
