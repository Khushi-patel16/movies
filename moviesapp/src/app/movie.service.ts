// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {

//   constructor() { }
// }

// import { Injectable } from '@angular/core';
// 
// @Injectable({
  // providedIn: 'root'
// })
// export class MovieService {
// 
  // constructor() { }
// }
// 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, Observer, switchMap } from 'rxjs';
//import { Movie } from './movies.model';
import { Movie } from './models/movies.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:8080'; // Replace with your Golang backend URL

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies`);
  }

   addMovie(movie: Movie): Observable<Movie> {
     return this.http.post<Movie>(`${this.apiUrl}/movies`, movie);
   }


  updateMovie(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/movies/${id}`, movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/movies/${id}`);
  }
}
