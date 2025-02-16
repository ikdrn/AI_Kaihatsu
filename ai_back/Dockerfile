# ai_back/Dockerfile
FROM golang:1.21-alpine

WORKDIR /app
# go.mod, go.sum をコピーして依存関係を取得
COPY go.mod go.sum ./
RUN go mod download

# 依存関係の整理
RUN go mod tidy

# ソースコードのコピーとビルド
COPY . .
RUN go build -o main .

EXPOSE 8080
CMD ["./main"]
