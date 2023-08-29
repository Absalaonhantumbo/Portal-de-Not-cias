import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError('Something bad happened; please try again later.');
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
      return throwError(error.error.error ? error.error : { error: error.error });
    }
  }

  private normalizeUrl(url: string): string {
    if (/^https?:\/\//.test(url)) {
      return url;
    }
    return `${this.API_URL}${url}`;
  }

  public get<T>(url: string) {
    console.log(this.normalizeUrl(url));
    return this.http.get<T>(this.normalizeUrl(url),).pipe(
      catchError(this.handleError)
    );
  }

  getAllArticle() {
     const token = 'e6927a1182ef4a30a6d2e180d950aef1'
     const options = {
       headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
     };
    return this.http.get<any>(`${this.API_URL}`, options);
  }
}
