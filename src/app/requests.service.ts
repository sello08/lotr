import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  
  constructor(private http : HttpClient) { 
  }
  getMovies(){
    const headers ={'Authorization' : 'Bearer R6AQaIenLRR2n8sTXqm7'}
    return this.http.get<any>('https://the-one-api.dev/v2/movie' , { headers } );
  
  }
}
