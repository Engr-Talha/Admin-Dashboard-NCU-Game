import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from 'src/app/core/guards/user-guard.guard';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { ShowIndiviualBlogComponent } from './show-indiviual-blog/show-indiviual-blog.component';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'Viewblogs', pathMatch: 'full' },
  { path: 'viewblogs', component: ViewBlogsComponent, canActivate: [UserGuardGuard] },
  { path: 'addblogs', component: AddBlogsComponent, canActivate: [UserGuardGuard] },
  { path: 'addblogs', component: AddBlogsComponent, canActivate: [UserGuardGuard] },
  { path: 'AddBlog/:id', component: AddBlogsComponent, canActivate: [UserGuardGuard] },
  { path: 'ShowBlog/:id', component: ShowIndiviualBlogComponent, canActivate: [UserGuardGuard] },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
