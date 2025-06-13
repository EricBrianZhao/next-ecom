package main

import (
	"diamondshop-backend/api"
)

func main() {
	r := api.SetupRouter()
	r.Run(":8080")
}
