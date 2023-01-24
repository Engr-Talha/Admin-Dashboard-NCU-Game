import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviroment';
import { Territory } from '../Models/Territory';


@Injectable({
  providedIn: 'root'
})
export class TerritoryService {
  constructor(private http: HttpClient) { }

  getAllTerritories() {
    return this.http.get<Territory[]>(`${environment.api}/api/admin/territory`);
  }

  addTerritory(data: any) {
    return this.http.post(`${environment.api}/api/admin/territory/create`, data);
  }

  getTerritoryByID(id: number) {
    return this.http.get<Territory>(`${environment.api}/api/admin/territory/${id}`);
  }

  UpdateTerritoryID(data: any, id: number) {
    return this.http.post(`${environment.api}/api/admin/territory/update/${id}`, data);
  }

  deleteTerritoy(id: number) {
    console.log(id)
    return this.http.delete(`${environment.api}/api/admin/territory/delete/${id}`);
  }






}
