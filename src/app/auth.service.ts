import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './Models/Response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public baseUrl: string =
    "http://localhost:5072/api/Values";



  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<Response> {
    return this.client.get<Response>(this.baseUrl + `/${username}/${password}`);
  }

  register(username: string, password: string, email: string): Observable<Response> {
    const payLoad = { username, password, email };
    return this.client.post<Response>(`${this.baseUrl}/register`, payLoad);
  }


}
