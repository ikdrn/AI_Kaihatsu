// src/Sidebar.tsx
import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>My App</h2>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Directory</a></li>
          <li><a href="#">Settings</a></li>
          {/* 必要に応じて項目を追加 */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
