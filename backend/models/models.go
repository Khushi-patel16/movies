// package models

// import "gorm.io/gorm"

// type Movie struct {
//     ID     uint   `json:"id"`
//     Title  string `json:"title"`
//     Genre  string `json:"genre"`
//     Year   int    `json:"year"`
//     Rating int    `json:"rating"`
// 	Image  string `json:"image"` 
// }


package models

import "gorm.io/gorm"

type Movie struct {
    ID     uint   `gorm:"primaryKey" json:"id"`
    Title  string `gorm:"not null" json:"title"`
    Genre  string `json:"genre"`
    Year   int    `json:"year"`
    Rating int    `json:"rating"`
    Image  string `json:"image"`
}

func (m *Movie) TableName() string {
    return "movies"
}

func GetAllMovies(db *gorm.DB) ([]Movie, error) {
    var movies []Movie
    result := db.Find(&movies)
    return movies, result.Error
}


// You can add more methods/functions related to Movie model here if needed
