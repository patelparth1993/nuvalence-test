import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  setAllUsers(customers:any){
    localStorage.setItem('customers',JSON.stringify(customers))
  }

  getAllUsersFromLocal():any{
    let result= localStorage.getItem('customers');
    return result ? JSON.parse(result) : []
  }

 getAllUsers():Observable<any>{
  return this.http.get<[]>(environment.apiUrl,{params:{"results":"10"}})
  .pipe(
     catchError(this.handleError)
     );
 }

 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.log(error)
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

}
