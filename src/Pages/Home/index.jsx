import React from 'react';
import Header from '../../Components/Header';
import MainContent from '../../Components/MainContent';
import NewsTab from '../../Components/NewsTab';

export default function Home() {
  return (
    <>
      <Header />
      <MainContent>
        <NewsTab />
      </MainContent>
    </>
  );
}
