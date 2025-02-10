import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http : HttpClient) { }

  register(user : any){
    return this.http.post(`${this.baseUrl}/register`, user, { responseType : 'text'});
  }

  login(credentials : any){
    return this.http.post(`${this.baseUrl}/login`, credentials, { responseType : 'text'});
  }

  logout(){
    return this.http.post(`${this.baseUrl}/logout`, {}, { responseType : 'text'});
  }
}
