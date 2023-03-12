import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  config= new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Accept','application/json')
     .set('Access-Control-Allow-Origin', '*');
  constructor(private http:HttpClient) { }

  getAll =(url:string) =>{
    return this.http.get(url,{headers :this.config}).pipe(
      map((response) => response),
      catchError(this.handleError)
    )
  }

  private handleError = (error :Response) =>{
    console.log(error);

    return throwError(error);
    
  }




  
}
