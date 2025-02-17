// AI_Kaihatsu/ai_front/src/components/MainContent.tsx
import React, { useState } from 'react';
import DirectorySelector from './DirectorySelector';

const MainContent: React.FC = () => {
  const [selectedDirectory, setSelectedDirectory] = useState<string>('');

  const handleDirectorySelect = (dir: string) => {
    setSelectedDirectory(dir);
  };

  return (
    <div className="main-content">
      <h1>メイン画面</h1>
      <p>選択したディレクトリ: {selectedDirectory}</p>
      <DirectorySelector onSelect={handleDirectorySelect} />
    </div>
  );
};

export default MainContent;
