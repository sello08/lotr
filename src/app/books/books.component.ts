import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import { RequestsService } from './../requests.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  public books : any;

  constructor(private requestsService : RequestsService, private http: HttpClient) { }

  ngOnInit(): void {
    const headers ={'Authorization' : 'Bearer R6AQaIenLRR2n8sTXqm7'}
    this.http.get<any>('https://the-one-api.dev/v2/movie' , { headers }).subscribe(data => {this.books = data.docs});
    
  }



}
