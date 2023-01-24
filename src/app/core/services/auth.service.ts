import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }
  public signin(data: any) {
    console.log("data", data)
    return this.http.post(`${environment.api}/api/admin/login`, data);
  }

}
