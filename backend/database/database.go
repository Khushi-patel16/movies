package database

import (
    "fmt"
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
    "movies-app/models"
)

var DB *gorm.DB

func Init() {
    var err error

    host := "localhost"
    user := "postgres"
    password := "Khushi@1610"
    dbname := "moviesdb"
    port := "5432"
    sslmode := "disable"
    timezone := "UTC"

    dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=%s TimeZone=%s",
        host, user, password, dbname, port, sslmode, timezone)

    DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        panic("failed to connect database")
    }

    DB.AutoMigrate(&models.Movie{})
}
