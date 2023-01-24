import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/core/services/blogs.service';

@Component({
  selector: 'app-show-indiviual-blog',
  templateUrl: './show-indiviual-blog.component.html',
  styleUrls: ['./show-indiviual-blog.component.scss']
})
export class ShowIndiviualBlogComponent {


  description: string = '';
  title: string = '';
  category: string = ''
  blogId: number = 0;


  constructor(
    private blogservice: BlogsService, private route: ActivatedRoute


  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // console.log(params)
      this.blogId = params['id'];
      // console.log(this.blogId)
      if (this.blogId != 0) {
        let data: any = new FormData();
        this.blogservice.getById(this.blogId).subscribe({
          next: (resp: any) => {
            // console.log('edit', resp);

            this.description = resp[0].blog;
            this.title = resp[0].title;
            this.category = resp[0].type

            // console.log('====================================');
            // console.log(this.description);
            // console.log('====================================');
            // console.log('====================================');
            // console.log(this.title);
            // console.log('====================================');
            // console.log('====================================');
            // console.log(this.category);
            // console.log('====================================');


          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }
}
