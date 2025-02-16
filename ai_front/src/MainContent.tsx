// src/MainContent.tsx
import React from 'react';
import DirectorySelector from './DirectorySelector';
import './MainContent.css';

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <h1>Directory Selection</h1>
      <DirectorySelector />
    </div>
  );
};

export default MainContent;
