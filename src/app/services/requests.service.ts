import { Movies } from './../models/movies';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  
  constructor(private http : HttpClient) { 
  }



  getMovies(): Observable<any>{
    const headers = {'Authorization' : 'Bearer R6AQaIenLRR2n8sTXqm7'}
    return this.http.get<any>('https://the-one-api.dev/v2/movie' , { headers } );
  }
  getChapters(): Observable<any>{
    const headers = {'Authorization' : 'Bearer R6AQaIenLRR2n8sTXqm7'}
    return this.http.get<any>('https://the-one-api.dev/v2/chapter' , { headers } );
  }
  getCharacters(): Observable<any>{
    const headers = {'Authorization' : 'Bearer R6AQaIenLRR2n8sTXqm7'}
    return this.http.get<any>('https://the-one-api.dev/v2/character' , { headers } );
  }
  getCharacterQuotes(id: any): Observable<any>{
    const headers = {'Authorization' : 'Bearer R6AQaIenLRR2n8sTXqm7'}
    return this.http.get<any>('https://the-one-api.dev/v2/character/'+ id + '/quote'  , { headers } );
    
  }

}
