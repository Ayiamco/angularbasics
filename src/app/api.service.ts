import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable,of} from "rxjs";
import {catchError} from "rxjs/operators";
import { GithubUser } from './githubUser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  githubUrl= "https://api.github.com/users";
  private httpOptions = 
  {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  getGithubUsers():Observable<GithubUser[]>{
  
    return this.http.get<GithubUser[]>(this.githubUrl).pipe(
      catchError(this.handleError<any>())
    )
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log("an error occured")
      console.error(`${operation}:${error}`); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
