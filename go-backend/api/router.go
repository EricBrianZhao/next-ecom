package api

import (
	"github.com/gin-gonic/gin"
	"diamondshop-backend/handler"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/ping", handler.Ping)
	return r
}
