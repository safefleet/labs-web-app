import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment'
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
  private URL = environment.API_URL + 'auth/';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.URL + 'login/', {
      email: email,
      password: password
    });
  }

  getAuthorizationToken() {
    return localStorage.getItem('jwt');
  }
}
