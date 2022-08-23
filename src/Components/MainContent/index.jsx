import React from 'react';
import './style.css';

export default function MainContent({ children }) {
  return (
    <main className="main-container">
      { children }
    </main>
  );
}
