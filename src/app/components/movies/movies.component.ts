import { Movies } from './../../models/movies';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies !: Movies[];
  public selectedMovie ?: Movies;
  public isClicked : boolean = false;
  
  
  constructor(private requestsService : RequestsService) { }

  ngOnInit(): void {

    this.getMovies();

  }

  getMovies(){
    this.requestsService.getMovies().subscribe(response => this.movies = response.docs);
  }

  getMovie(movie : Movies){
    this.isClicked = true;
    this.selectedMovie = this.movies.find(data => data._id == movie._id)
  }


  

}
