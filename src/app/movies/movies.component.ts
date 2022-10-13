import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestsService } from '../requests.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies : any;
  
  constructor(private requestsService : RequestsService, private http: HttpClient) { }

  ngOnInit(): void {

    this.getMovies();
    
  }

  getMovies(){
    this.requestsService.getMovies().subscribe(data => {this.movies = data.docs})
  }
}
