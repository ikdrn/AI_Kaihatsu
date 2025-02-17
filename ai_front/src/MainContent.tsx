// src/MainContent.tsx
import React from 'react';
import ManualInputSelector from './components/ManualInputSelector';
import ExplorerSelector from './components/ExplorerSelector';
import DesignDocuments from './components/DesignDocuments';
import './MainContent.css';

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <h1>Directory Selection</h1>
      {/* 設計書への移動（左側ナビ） */}
      <DesignDocuments />
      {/* 手入力部 */}
      <ManualInputSelector />
      {/* エクスプローラー選択部 */}
      <ExplorerSelector />
    </div>
  );
};

export default MainContent;
