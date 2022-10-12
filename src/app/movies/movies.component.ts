import { HttpClient } from '@angular/common/http';
import { RequestsService } from '../requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public books : any;
  
  constructor(private requestsService : RequestsService, private http: HttpClient) { }

  ngOnInit(): void {
    const headers ={'Authorization' : 'Bearer R6AQaIenLRR2n8sTXqm7'}
    this.http.get<any>('https://the-one-api.dev/v2/movie' , { headers }).subscribe(data => {this.books = data.docs});
    
  }
}
