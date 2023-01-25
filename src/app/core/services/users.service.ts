import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviroment';
import { Users } from './UsersModels';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http.get<Users[]>(`${environment.api}/api/admin/users`);
  }

  deleteUser(eventID: string) {
    return this.http.delete(`${environment.api}/api/user/update/${eventID}`);
  }

  UpdateUser(data: object, userId: string) {
    return this.http.post(`${environment.api}/api/user/update/${userId}`, data);
  }

  getAllUserBattles() {
    return this.http.get(`${environment.api}/api/admin/battles`);
  }

  getUserBattlesById(id: number) {
    return this.http.get(`${environment.api}/api/admin/battles/${id}`);
  }
}
