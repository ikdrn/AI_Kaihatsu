// AI_Kaihatsu/ai_front/src/components/DirectorySelector.tsx
import React, { useRef } from 'react';

interface DirectorySelectorProps {
  onSelect: (directory: string) => void;
}

const DirectorySelector: React.FC<DirectorySelectorProps> = ({ onSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);

  // ファイル選択ボタンをクリック
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // ファイル選択時のハンドラー
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // webkitRelativePathからディレクトリ名を抽出（最初の要素をディレクトリとする）
      const fullPath = e.target.files[0].webkitRelativePath;
      const directory = fullPath.split('/')[0];
      onSelect(directory);
    }
  };

  // テキスト入力の変更時
  const handleTextChange = () => {
    if (textInputRef.current) {
      onSelect(textInputRef.current.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ディレクトリを入力"
        ref={textInputRef}
        onChange={handleTextChange}
      />
      <button onClick={handleButtonClick}>ディレクトリ選択</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        webkitdirectory="true"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default DirectorySelector;
