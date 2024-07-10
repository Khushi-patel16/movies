import { Component, OnInit } from '@angular/core';

interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 5, image: 'path/to/inception.jpg' },
    { id: 2, title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 5, image: 'path/to/dark-knight.jpg' },
  ];

  constructor() { }

  ngOnInit(): void { }

  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i);
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}
