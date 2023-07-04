import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel, LogInInput} from '../Models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  urlLog = 'http://localhost:8080/api/v1/auth/signup'
  urlLogIn = 'http://localhost:8080/api/v1/auth/login'

  constructor(private http : HttpClient) { }

  CreateUser(user : UserModel): Observable<any> {

    return this.http.post(this.urlLog, user )
  }

  LogIn(loginInput : LogInInput): Observable<any> {

    return this.http.post(this.urlLogIn, loginInput )
  }
  
}
