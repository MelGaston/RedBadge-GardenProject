import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

import{User} from "./user";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL: string = 'https://efa-gardenapp-backend.herokuapp.com/api'
  constructor(
    private http: HttpClient) { }

  postLogin(userInfo: User): any{
    console.log("You did it! " + userInfo.email +" " +  userInfo.password)
    return this.http.post<User>(`${this.apiURL}/auth/login`, userInfo, httpOptions).pipe(
      catchError(this.handleError("postLogin")),
      map(user => {
        console.log(JSON.stringify(user))
      })
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
