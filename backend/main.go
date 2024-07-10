package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
    "movies-app/database"
    "movies-app/handlers"
)

func main() {
    r := gin.Default()

    // Initialize database connection
    database.Init()

    // CORS middleware
     config := cors.DefaultConfig()
     config.AllowOrigins = []string{"http://localhost:4200"} // Replace with your Angular app URL
     config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
     r.Use(cors.New(config))
// 
    // Define routes
    r.POST("/movies", handlers.CreateMovie)
    r.PUT("/movies/:id", handlers.UpdateMovie)
    r.DELETE("/movies/:id", handlers.DeleteMovie)
    r.GET("/movies", handlers.GetMovies)
    r.GET("/movies/:id", handlers.GetMovieByID)

    // Default handler for root URL
    r.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{"message": "Welcome to the Movies API"})
    })

    // Handle undefined routes
    r.NoRoute(func(c *gin.Context) {
        c.JSON(http.StatusNotFound, gin.H{"message": "Route not found"})
    })

    // Run server
    r.Run(":8080") // listen and serve on 0.0.0.0:8080
}



