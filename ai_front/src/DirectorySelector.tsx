import React, { useRef, useState } from 'react';
import './DirectorySelector.css';

const DirectorySelector: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [manualPath, setManualPath] = useState<string>('');

  // エクスプローラー（ファイル選択）を開く
  const handleExplorerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // ファイル入力の変更イベント
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // webkitRelativePath からディレクトリ部分を抽出
      const firstFile = files[0];
      const relativePath = (firstFile as any).webkitRelativePath;
      if (relativePath) {
        const pathParts = relativePath.split('/');
        // 最後のファイル名を削除してディレクトリ部分を取得
        pathParts.pop();
        const directory = pathParts.join('/');
        setSelectedPath(directory);
      } else {
        setSelectedPath(firstFile.name);
      }
    }
  };

  // 手入力で指定ボタン
  const handleManualSelect = () => {
    if (!manualPath) {
      alert('パスを入力してください');
      return;
    }
    setSelectedPath(manualPath);
    alert(`手入力で選択: ${manualPath}`);
  };

  // エクスプローラーで選択ボタン（すでに選択されたパスを確定）
  const handleExplorerSelect = () => {
    if (selectedPath) {
      alert(`エクスプローラーで選択: ${selectedPath}`);
    } else {
      alert('エクスプローラーでディレクトリが選択されていません');
    }
  };

  return (
    <div className="directory-selector">
      {/* 手入力エリア */}
      <div className="input-section">
        <input
          type="text"
          placeholder="ディレクトリパスを入力"
          value={manualPath}
          onChange={(e) => setManualPath(e.target.value)}
        />
      </div>
      {/* ボタン群 */}
      <div className="button-group">
        <button onClick={handleExplorerClick}>エクスプローラーで選択</button>
        <button onClick={handleManualSelect}>手入力で指定</button>
      </div>
      {/* 隠しファイル入力（ディレクトリ選択） */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        {...{ webkitdirectory: 'true', directory: 'true' }}
        onChange={handleFileChange}
      />
      {/* 確定用ボタン */}
      <div className="confirm-section">
        <button onClick={handleExplorerSelect}>選択したパスで確定</button>
      </div>
      {/* 選択されたパスの表示 */}
      <div className="selected-path">
        <p>選択されたパス: {selectedPath}</p>
      </div>
    </div>
  );
};

export default DirectorySelector;
