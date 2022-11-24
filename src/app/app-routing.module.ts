import { MoviesComponent } from './components/movies/movies.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'chapters', component: ChaptersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
