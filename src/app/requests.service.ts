import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  public books : any;
  constructor(private http : HttpClient) { 
  }
  getBooks(){
    return this.http.get<any>('https://the-one-api.dev/v2/book').subscribe(data => this.books = data )
  }
}
