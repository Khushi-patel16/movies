// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { MovieListComponent } from './movie-list.component';

// describe('MovieListComponent', () => {
//   let component: MovieListComponent;
//   let fixture: ComponentFixture<MovieListComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [MovieListComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(MovieListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list movies', () => {
    const movies = [
      { id: 1, title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 5, image: 'path/to/inception.jpg' },
      { id: 2, title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 5, image: 'path/to/dark-knight.jpg' }
    ];
    component.movies = [...movies];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const movieElements = compiled.querySelectorAll('.movie-tile');

    expect(movieElements.length).toBe(2);
    expect(movieElements[0].querySelector('h3').textContent).toContain('Inception');
    expect(movieElements[1].querySelector('h3').textContent).toContain('The Dark Knight');
  });

  it('should delete a movie', () => {
    const movie = { id: 1, title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 5, image: 'path/to/inception.jpg' };
    component.movies = [movie];
    component.deleteMovie(movie.id);
    fixture.detectChanges();

    expect(component.movies.length).toBe(0);
  });
});
