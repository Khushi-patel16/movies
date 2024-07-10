package handlers

import (
    "net/http"
    "time"
    "movies-app/database"
    "movies-app/models"
    "github.com/gin-gonic/gin"
)

func CreateMovie(c *gin.Context) {
    var movie models.Movie
    if err := c.ShouldBindJSON(&movie); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    if movie.Year < 1900 || movie.Year > time.Now().Year() {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Year must be between 1900 and the current year"})
        return
    }

    var existingMovie models.Movie
    database.DB.Where("title = ?", movie.Title).First(&existingMovie)
    if existingMovie.ID != 0 {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Movie with this title already exists"})
        return
    }

    database.DB.Create(&movie)
    c.JSON(http.StatusOK, movie)
}

func UpdateMovie(c *gin.Context) {
    id := c.Param("id")
    var movie models.Movie
    if err := database.DB.First(&movie, id).Error; err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Movie not found"})
        return
    }

    var updatedMovie models.Movie
    if err := c.ShouldBindJSON(&updatedMovie); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    if updatedMovie.Year < 1900 || updatedMovie.Year > time.Now().Year() {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Year must be between 1900 and the current year"})
        return
    }

    movie.Title = updatedMovie.Title
    movie.Genre = updatedMovie.Genre
    movie.Year = updatedMovie.Year
    movie.Rating = updatedMovie.Rating
    movie.Image = updatedMovie.Image

    database.DB.Save(&movie)
    c.JSON(http.StatusOK, movie)
}

func DeleteMovie(c *gin.Context) {
    id := c.Param("id")
    var movie models.Movie
    if err := database.DB.First(&movie, id).Error; err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Movie not found"})
        return
    }

    database.DB.Delete(&movie)
    c.JSON(http.StatusOK, gin.H{"message": "Movie deleted"})
}

func GetMovies(c *gin.Context) {
    var movies []models.Movie
    database.DB.Find(&movies)
    c.JSON(http.StatusOK, movies)
}

func GetMovieByID(c *gin.Context) {
    id := c.Param("id")
    var movie models.Movie
    if err := database.DB.First(&movie, id).Error; err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Movie not found"})
        return
    }

    c.JSON(http.StatusOK, movie)
}
