import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { EditorModule } from 'primeng/editor';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ShowIndiviualBlogComponent } from './show-indiviual-blog/show-indiviual-blog.component';


@NgModule({
  declarations: [
    ViewBlogsComponent,
    AddBlogsComponent,
    ShowIndiviualBlogComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    CKEditorModule,
    EditorModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    ButtonModule,
    DropdownModule,


  ]
})
export class BlogsModule { }
