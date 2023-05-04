import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user/user.module';
export interface AuthResponseData {
  kind : string;
  idToken : string;
  email : string;
  refreshToken : string;
  expriseIn : string;
  localId: string
  registered? : boolean 
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<User>()
  constructor(private http : HttpClient) { 
  }
  signup(email : string, password : string){
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7uCiK3ZsDJG2a4PGvcU2uPJu7NzbccG0",
    {
      email : email,
      password : password,
      returnSecureToken : true
    })
    .pipe(catchError(this.handleError))}
  login(email:string, password:string){
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key==AIzaSyA7uCiK3ZsDJG2a4PGvcU2uPJu7NzbccG0",
    {
      email : email,
      password : password,
      returnSecureToken : true
    })
    .pipe(catchError(this.handleError))
  }
  private handleError(errorRes : HttpErrorResponse){
    let errorMessage = "An unkown error occurred";
    if (!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage)
    }
    switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = "The email is exist";
        break
      case 'EMAIL_NOT_FOUND':
        errorMessage = "email not correct"
        break
      case 'INVALID_PASSWORD':
        errorMessage = "password not correct"
        break}
      return throwError(errorMessage)
  }
}
