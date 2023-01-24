import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviroment';
import { DragonClass } from './DragonModel';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private http: HttpClient) { }

  addDragon(data: any) {
    // console.log('data', data);
    return this.http.post(`${environment.api}/api/admin/blog/create`, data);
  }

  getAllDragon() {
    return this.http.get<DragonClass[]>(`${environment.api}/api/admin/dragon-class/`);
  }

  deleteBlog(blogId: number) {
    // console.log(blogId)
    return this.http.delete(`${environment.api}/api/admin/blog/delete/${blogId}`);
  }

  setPublish(data: any) {
    console.log('api called');
    console.log("data", data)
    return this.http.patch(`${environment.api}/api/admin/blog/publish/`, data);
  }

  UpdateBlog(data: any, blogId: number) {
    console.log('data', blogId, data);
    return this.http.post(`${environment.api}/api/admin/blog/update/${blogId}`, data);
  }

  getById(blogId: number) {
    return this.http.get<DragonClass>(`${environment.api}/api/admin/blog/${blogId}`);
  }
}
