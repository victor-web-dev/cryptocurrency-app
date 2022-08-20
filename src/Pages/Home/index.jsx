import React, { useEffect } from 'react';
import MainContent from '../../Components/MainContent';
import NewsTab from '../../Components/NewsTab';

export default function Home() {

  const modifytitle = () => {
    const newTitle = `${document.title} - Home`
    document.title = newTitle;
  }

  useEffect(() => {
    modifytitle();
  });

  return (
    <>
      <MainContent>
        <NewsTab />
      </MainContent>
    </>
  );
}
