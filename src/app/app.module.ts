import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MoviesComponent } from './components/movies/movies.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChaptersComponent,
    CharactersComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
