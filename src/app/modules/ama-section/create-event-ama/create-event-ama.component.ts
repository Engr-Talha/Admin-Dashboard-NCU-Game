import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EventsAmaService } from 'src/app/core/services/events-ama.service';
@Component({
  selector: 'app-create-event-ama',
  templateUrl: './create-event-ama.component.html',
  styleUrls: ['./create-event-ama.component.scss']
})
export class CreateEventAmaComponent {
  date7: Date;
  public EventForm: FormGroup;

  file: File | null = null;
  imageUrl: string = '';
  Submitted = false;

  constructor(
    private route: Router,
    private EventsAmaService: EventsAmaService
  ) {
    this.EventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }
  get fc() {
    return this.EventForm.controls;
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
  onSubmit() {
    // let data = {
    //   description: this.fc['description'].value,
    //   title: this.fc['title'].value,
    //   date: this.date7,
    //   imageType: 'amaImage',
    //   file: "abc"
    //   // data.append('imageType', 'blogImage');

    // }
    // console.log("hello", data)

    let data = new FormData();
    data.append('title', this.fc['title'].value);
    data.append('description', this.fc['description'].value);
    data.append('date', String(this.date7));
    data.append('imageType', 'amaImage');
    console.log('first');

    if (this.file) {
      data.append('file', this.file);
    } else if (this.imageUrl) {
      data.append('file', this.imageUrl);
    }
    console.log(data);


    this.EventsAmaService.addevent(data).subscribe({
      next: (data: any) => {
        console.log(data)
      },
      error: (error) => {
        console.log(error)
      }
    })

    this.route.navigate(['/ama/ViewEvent']);

  }

}
