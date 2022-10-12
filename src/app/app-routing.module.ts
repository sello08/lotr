import { CharactersComponent } from './characters/characters.component';
import { QuotesComponent } from './quotes/quotes.component';
import { MoviesComponent } from './movies/movies.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'chapters', component: ChaptersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
