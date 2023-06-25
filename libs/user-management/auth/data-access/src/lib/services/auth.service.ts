import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

  private BASE_URL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}


  logIn(username: string, password: string, captcha: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post(url, {username, password, captcha});
  }

}