// src/App.tsx
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
