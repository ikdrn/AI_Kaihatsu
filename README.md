AIで開発支援をするアプリ
TypeScript+Reactとgoでシステム構築

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
