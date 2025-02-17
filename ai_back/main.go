// AI_Kaihatsu/ai_back/main.go
package main

import (
	"log"
	"net/http"
)

func main() {
	// APIハンドラの登録
	http.HandleFunc("/api/process", handleProcess)

	// サーバ起動
	log.Println("バックエンドサーバをポート8080で起動中...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("サーバ起動に失敗しました: ", err)
	}
}
