import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TerritoryService } from 'src/app/core/services/territory.service';

@Component({
  selector: 'app-add-territory',
  templateUrl: './add-territory.component.html',
  styleUrls: ['./add-territory.component.scss']
})
export class AddTerritoryComponent {
  TerritoryForm: FormGroup;
  file: File | null = null;
  imageUrl: string = '';
  Submitted = false;
  TerritoryID: any


  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private TerritoryService: TerritoryService
  ) {
    this.TerritoryForm = this.fb.group({
      name: '',
      imageUrl: '',
      description: '',
    });
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
  get fc() {
    return this.TerritoryForm.controls;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log('param', params);
      this.TerritoryID = params['id'];
      console.log('blog ID', this.TerritoryID);
      if (this.TerritoryID != undefined) {
        this.TerritoryService.getTerritoryByID(this.TerritoryID).subscribe({
          next: (resp: any) => {
            console.log('edit', resp.data);
            // this.blog = resp['code']
            // console.log("first", this.blog)
            this.TerritoryForm.patchValue({
              name: resp.data.name,
              description: resp.data.description
            });
            this.imageUrl = resp.data.imageUrl;
            // this.control = new FormControl(resp.code[0].Blogtype);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }

  onSubmit() {
    let data = new FormData();
    data.append('name', this.fc['name'].value);
    data.append('imageType', 'terrotiryImage');
    data.append('description', this.fc['description'].value)
    if (this.file) {
      data.append('file', this.file);
    } else if (this.imageUrl) {
      data.append('file', this.imageUrl);
    }
    this.TerritoryService.addTerritory(data).subscribe({
      next: (data: any) => {
        console.log(data.success);
        this.router.navigate(['/territory/ViewTerritory']);
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      },
    });

    // let data = {
    //   name: this.fc['name'].value,
    //   imageUrl: this.imageUrl,
    //   description: this.fc['description'].value
    // }
    // console.log("data", data)
    // if (this.file || this.imageUrl) {
    //   this.TerritoryService.addTerritory(data).subscribe({
    //     next: (data: any) => {
    //       console.log(data.success);
    //       this.router.navigate(['/territory/ViewTerritory']);
    //     },
    //     error: (error: any) => {
    //       console.error('There was an error!', error);
    //     },
    //   });
    // }
    // else {
    //   console.error('There was an error!');

    // }

  }
}
