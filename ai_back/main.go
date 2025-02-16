package main

import (
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

func main() {
	router := gin.Default()

	// ここで CORS ミドルウェアを適用する
	router.Use(cors.Default())

	// ルートパス
	router.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello from the Go backend!")
	})

	// ディレクトリ一覧を返すエンドポイント
	router.GET("/api/directories", func(c *gin.Context) {
		baseDir := "."
		files, err := ioutil.ReadDir(baseDir)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read directory"})
			return
		}

		directories := []string{}
		for _, file := range files {
			if file.IsDir() {
				directories = append(directories, file.Name())
			}
		}
		c.JSON(http.StatusOK, gin.H{"directories": directories})
	})

	// Google API キーを返す（サンプル）
	router.GET("/api/googlekey", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"googleApiKey": "YOUR_GOOGLE_API_KEY"})
	})

	// サーバー起動
	router.Run(":8080")
}
