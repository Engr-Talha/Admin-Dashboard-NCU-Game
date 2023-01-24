import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { blog } from 'src/app/core/models/blogModel';
import { BlogsService } from 'src/app/core/services/blogs.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.scss']
})
export class ViewBlogsComponent {

  name = 'Angular';
  editor = ClassicEditor;
  blogForm: FormGroup;
  description: string = '';
  Submitted = false;
  blogpublished: string = ''
  file: File | null = null;
  imageUrl: string = '';

  blog: blog[] = []

  constructor(
    private fb: FormBuilder,
    private blogservice: BlogsService,

  ) {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      category: ['', [Validators.required, , Validators.minLength(1)]],
      // description: ['', [Validators.required, , Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {
    this.blogservice
      .getBlogs()
      .subscribe({
        next: (resp: any) => {
          console.log(resp.data)
          this.blog = resp['data']
        },
        error: (err) => {
          console.log(err);
        },
      });

  }

  get fc() {
    return this.blogForm.controls;
  }
  deleteBlog(id: number) {
    console.log(id);
    this.blogservice.deleteBlog(id).subscribe({
      next: (data: any) => {
        this.blogservice
          .getBlogs()
          .subscribe({
            next: (resp: any) => {
              console.log(resp['data'])
              this.blog = resp['data']
            },
            error: (err) => {
              console.log(err);
            },
          });
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  UnflipPublish(id: number) {

    let data = {
      blogId: id,
      status: false
    }
    this.blogservice
      .setPublish(data)
      .subscribe({
        next: (resp) => {
          this.blogservice
            .getBlogs()
            .subscribe({
              next: (resp) => {
                this.blog = resp
                console.log(resp)
              },
              error: (err) => {
                console.log(err);
              },
            });
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  flipPublish(id: number) {


    console.log("data", id)
    let data = {
      blogId: id,
      status: true
    }

    this.blogservice
      .setPublish(data)
      .subscribe({
        next: (resp) => {
          this.blogservice
            .getBlogs()
            .subscribe({
              next: (resp) => {
                this.blog = resp
                console.log(resp)
              },
              error: (err) => {
                console.log(err);
              },
            });
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onSubmit() {
    this.Submitted = true;
    let data: any = new FormData();
    console.log(this.description);
    console.log(data);
  }

}
