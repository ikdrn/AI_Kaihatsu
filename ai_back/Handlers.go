// AI_Kaihatsu/ai_back/handlers.go
package main

import (
	"encoding/json"
	"net/http"
)

// AIRequestはリクエスト用の構造体です。
type AIRequest struct {
	Input string `json:"input"`
}

// AIResponseはレスポンス用の構造体です。
type AIResponse struct {
	Output string `json:"output"`
}

// handleProcessはAIによる処理をシミュレートするAPIエンドポイントです。
func handleProcess(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "POSTメソッドのみ許可されています。", http.StatusMethodNotAllowed)
		return
	}

	var req AIRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "リクエストの解析に失敗しました。", http.StatusBadRequest)
		return
	}

	// ここでAI処理のロジックを実装（現状はダミー処理）
	response := AIResponse{
		Output: "受け取った入力は: " + req.Input,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}
