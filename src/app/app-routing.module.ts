import { MoviesComponent } from './movies/movies.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'chapters', component: ChaptersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
