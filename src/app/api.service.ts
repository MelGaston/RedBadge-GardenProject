import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

import{ User } from "./user";
import { Product } from './models/product.model';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0eWxlckBnbWFpbC5jb20iLCJpYXQiOjE1NDk2NDMxNDgsImV4cCI6MTU0OTcyOTU0OH0.rh5XAfJfSRCuzfLi99JtfiPhbZv7Zbl3e_LwF32PSGQ"
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL: string = 'https://efa-gardenapp-backend.herokuapp.com/api';
  private token: string = "blah";
  constructor(
    private http: HttpClient) { }

  postLogin(userInfo: User): any{
    console.log("You did it! " + userInfo.email +" " +  userInfo.password)
    return this.http.post<User>(`${this.apiURL}/auth/login`, userInfo, httpOptions).pipe(
      catchError(this.handleError("postLogin")),
      tap(user => {
        this.token = user.token;
        console.log(httpOptions);
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

  deleteProduct(product: Product | number): Observable<Product> {
    const url = `${this.apiURL}/product/${product}`;

    console.log(product);

    return this.http.delete<Product>(url, httpOptions).pipe(
      catchError(this.handleError<Product>('deleteProduct'))
    )
  }
}
