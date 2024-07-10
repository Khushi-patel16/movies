import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'movies', component: MovieListComponent ,outlet: 'movies'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }