import { Component } from '@angular/core';
import { events } from 'src/app/core/models/eventsModal';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { EventsAmaService } from 'src/app/core/services/events-ama.service';

@Component({
  selector: 'app-view-events-ama',
  templateUrl: './view-events-ama.component.html',
  styleUrls: ['./view-events-ama.component.scss'],
})
export class ViewEventsAmaComponent {
  events: events[] = [];
  addquestion: boolean = false;
  addanswer: boolean = false;
  public QuestionForm: FormGroup;
  public AnswerForm: FormGroup;

  file: File | null = null;
  imageUrl: string = '';

  constructor(private primengConfig: PrimeNGConfig, private EventsAmaService: EventsAmaService) {
    this.QuestionForm = new FormGroup({
      QuestionTitle: new FormControl('', Validators.required),
    });
    this.AnswerForm = new FormGroup({
      AnswerTitle: new FormControl('', Validators.required),
    });
  }
  get fc() {
    return this.QuestionForm.controls;
  }

  get fcAnswer() {
    return this.AnswerForm.controls;
  }

  ngOnInit(): void {
    this.EventsAmaService.getAllEvents().subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.events = resp['data'];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  DeleteQuestion(questionID: any) {
    this.EventsAmaService.deleteQuestion(questionID).subscribe({
      next: (data: any) => {
        console.log(data);
        this.EventsAmaService.getAllEvents()
          // .pipe(map((x: any) => x.data))
          .subscribe({
            next: (resp: any) => {
              this.events = resp['data'];
              // this.allBlogs.next(resp);
              // console.log('resp', this.allBlogs);
            },
            error: (err) => {
              console.log(err);
            },
          });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteBlog(eventId: any) {
    this.EventsAmaService.deleteevent(eventId).subscribe({
      next: (data: any) => {
        console.log(data);
        this.EventsAmaService.getAllEvents()
          // .pipe(map((x: any) => x.data))
          .subscribe({
            next: (resp: any) => {
              this.events = resp['data'];
              // this.allBlogs.next(resp);
              // console.log('resp', this.allBlogs);
            },
            error: (err) => {
              console.log(err);
            },
          });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  NewQuestion() {
    this.addquestion = true;
  }
  NewAnswer() {
    this.addanswer = true;
  }

  deleteQuestion(eventId: number) {}

  AnswerSubmit(questionId: number) {
    this.addanswer = false;
    let data = {
      title: this.fcAnswer['AnswerTitle'].value,
      questionId: questionId,
      userName: 'Talha',
      email: 'talha@gmail.com',
    };

    this.EventsAmaService.addAnswer(data).subscribe({
      next: (data: any) => {
        console.log(data);
        this.EventsAmaService.getAllEvents()
          // .pipe(map((x: any) => x.data))
          .subscribe({
            next: (resp: any) => {
              this.events = resp['code'];
              // this.allBlogs.next(resp);
              // console.log('resp', this.allBlogs);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  onQuestionFormSubmit(eventid: number) {
    this.addquestion = false;
    let data = {
      title: this.fc['QuestionTitle'].value,
      eventId: eventid,
      userName: 'Talha',
      email: 'talha@gmail.com',
    };
    // let mydata2 = JSON.stringify(data)

    this.EventsAmaService.addQuestion(data).subscribe({
      next: (data: any) => {
        console.log(data);
        this.EventsAmaService.getAllEvents()
          // .pipe(map((x: any) => x.data))
          .subscribe({
            next: (resp: any) => {
              this.events = resp['code'];
              // this.allBlogs.next(resp);
              // console.log('resp', this.allBlogs);
            },
            error: (err) => {
              console.log(err);
            },
          });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
