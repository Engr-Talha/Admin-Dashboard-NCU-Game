import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviroment';
import { blog } from '../models/blogModel';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  addBlog(data: any) {
    // console.log('data', data);
    return this.http.post(`${environment.api}/api/admin/blog/create`, data);
  }

  getBlogs() {
    return this.http.get<blog[]>(`${environment.api}/api/admin/blog/`);
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
    return this.http.get<blog>(`${environment.api}/api/admin/blog/${blogId}`);
  }
}
