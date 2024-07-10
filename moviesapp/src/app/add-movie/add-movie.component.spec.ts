import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie.component';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, AddMovieComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new movie', () => {
    const newMovie = {
      id: Date.now(),
      title: 'Test Movie',
      genre: 'Test Genre',
      year: 2021,
      rating: 5,
      image: 'test-image-url'
    };
    component.newMovie = { ...newMovie };
    component.onSubmit();

    expect(component.newMovie.title).toBeUndefined();
    expect(component.newMovie.genre).toBeUndefined();
    expect(component.newMovie.year).toBeUndefined();
    expect(component.newMovie.rating).toBeUndefined();
    expect(component.newMovie.image).toBeUndefined();
  });
});
