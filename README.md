<<<<<<< HEAD
AIで開発支援をするアプリ
TypeScript+Reactとgoでシステム構築
=======
<!-- AI_Kaihatsu/README.md -->

このプロジェクトは、AIを活用して設計書、開発物、テスト仕様書などを自動生成するシステムです。  
フロントエンドはTypeScriptとReact、バックエンドはGoで実装されています。
>>>>>>> 230decaa9af7803de717d971a0d2501337536ded

#起動
docker-compose build --no-cache
docker-compose up

#変更内容の確認
git status
変更ファイルのステージング

全ての変更をステージする
git add .

コミットの作成.変更内容を説明するメッセージを付けてコミットします:
git commit -m "更新内容の説明"
リモートリポジトリへのプッシュ
既にリモートリポジトリを設定している場合は、以下のコマンドで更新内容を反映します:

git push origin main
※ main はデフォルト
