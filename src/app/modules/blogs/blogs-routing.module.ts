import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { ShowIndiviualBlogComponent } from './show-indiviual-blog/show-indiviual-blog.component';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'Viewblogs', pathMatch: 'full' },
  { path: 'viewblogs', component: ViewBlogsComponent },
  { path: 'addblogs', component: AddBlogsComponent },
  { path: 'addblogs', component: AddBlogsComponent },
  { path: "AddBlog/:id", component: AddBlogsComponent },
  { path: "ShowBlog/:id", component: ShowIndiviualBlogComponent },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
