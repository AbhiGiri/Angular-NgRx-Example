import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(
    private httpClient: HttpClient
  ) { }

  get(url: string, params?: any) {
    const data = { params };
    return this.httpClient.get(this.baseURL + url, data)
               .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys[error];
    const key = keys[0];
    let message = error[key];
    if( response.status === 401 ) {
      //auth token delete
      //redirect login page
    }
    if( error[key] instanceof Array) {
      message = error[key[0]]
    }
    if( key == 'isTrusted') {
      // occured when not internet createConnection
      //call snackbar and show error message
    } else {
      message = key + ' : ' + message;
    }
    //call snackbar and show error message
    return throwError({messages: message, error});
  }

}
