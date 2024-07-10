import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import {RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //   { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
    { path: 'movies', component: MovieListComponent },
    { path: 'add-movie', component: AddMovieComponent }
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }






