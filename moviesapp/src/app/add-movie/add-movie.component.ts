import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.
import { MovieService } from '../movie.service';


interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, CommonModule], // Include FormsModule and CommonModule
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  newMovie: Partial<Movie> = {};

  constructor(private movieService: MovieService) {}

  async onSubmit(): Promise<void> {
    const movie: Movie = {
      id: Date.now(),
      title: this.newMovie.title!,
      genre: this.newMovie.genre!,
      year: this.newMovie.year!,
      rating: this.newMovie.rating!,
      image: this.newMovie.image!
    };

    try {
      const response = await this.movieService.addMovie(movie);
      console.log('Movie added:', response);
      this.newMovie = {}; // Clear the form after successful submission
    } catch (error) {
      console.error('There was an error!', error);
    };

    
  }
}


// this.movieService.addMovie(movie).subscribe(
  // response => {
    // console.log('Movie added:', response);
    // this.newMovie = {}; // Clear the form after successful submission
  // },
  // error => {
    // console.error('There was an error!', error);
  // }