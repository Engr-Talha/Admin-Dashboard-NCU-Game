import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BlogsService } from 'src/app/core/services/blogs.service';
import { Router } from '@angular/router';
import { blog } from 'src/app/core/models/blogModel';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Blogtype {
  name: string;
}

interface City {
  name: string,
  // code: string
}

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.scss'],
})
export class AddBlogsComponent {
  name = 'Angular';
  blog: blog[] = [];

  blogtype: Blogtype[];
  selectedblog: Blogtype;

  editor = ClassicEditor;
  description: string = '';
  Submitted = false;
  blogId: number = 0;
  file: File | null = null;
  imageUrl: string = '';

  public blogForm: FormGroup;
  control: FormControl | undefined;

  cities: City[];
  selectedCity1: City;



  constructor(private router: Router, private blogservice: BlogsService, private route: ActivatedRoute) {
    this.blogForm = new FormGroup({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      // description: new FormControl('')
    });
    this.blogtype = [{ name: 'News' }, { name: 'Updates' }];
    this.cities = [
      { name: 'News' }, { name: 'Updates' }
    ];
  }
  getImage(event: any) {
    console.log(event);
    const file = (event.target as any).files[0];
    this.file = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  deleteImage() {
    this.file = null;
    this.imageUrl = '';
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log('param', params);
      this.blogId = params['id'];
      console.log('blog ID', this.blogId);
      if (this.blogId != undefined) {
        this.blogservice.getById(this.blogId).subscribe({
          next: (resp: any) => {
            console.log('edit', resp);
            // this.blog = resp['code']
            // console.log("first", this.blog)
            this.blogForm.patchValue({
              title: resp.data[0].title,
            });
            this.imageUrl = resp.data[0].imageUrl;
            this.description = resp.data[0].blog;
            // this.control = new FormControl(resp.code[0].Blogtype);

            if (resp.data[0].type === 'News') {
              this.cities = [{ name: 'News' }, { name: 'Updates' }];
            } else if (resp.data[0].type === 'Updates') {
              this.cities = [{ name: 'Updates' }, { name: 'News' }];
            }
            console.log(this.cities);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }

  get fc() {
    return this.blogForm.controls;
  }

  onSubmit() {

    let data = new FormData();
    data.append('title', this.fc['title'].value);
    data.append('blog', this.description);
    data.append('type', this.selectedCity1.name);
    data.append('imageType', 'blogImage');
    console.log('first');

    if (this.file) {
      data.append('file', this.file);
    } else if (this.imageUrl) {
      data.append('file', this.imageUrl);
    }
    console.log(data);
    // if (this.blogId != undefined) {
    //   data.append('id', this.blogId);
    //   this.blogservice.UpdateBlog(data, this.blogId).subscribe({
    //     next: (data: any) => {
    //       console.log(data);
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     },
    //   });
    // } else {
    // data.append('id', null);

    // console.log('second', data);

    this.blogservice.addBlog(data).subscribe({
      next: (data: any) => {
        console.log(data);

        this.router.navigate(['/blog/viewblogs']);


      },
      error: (error) => {
        console.error('There was an error!', error);

      },
    });
    // }
  }
}
