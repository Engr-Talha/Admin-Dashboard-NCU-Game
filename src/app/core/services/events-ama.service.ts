import { Injectable } from '@angular/core';
import { events } from '../models/eventsModal';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviroment';
@Injectable({
  providedIn: 'root'
})
export class EventsAmaService {

  constructor(private http: HttpClient) {

  }

  addevent(data: object) {
    console.log('data in Service', data);
    return this.http.post(`${environment.api}/api/admin/event/create`, data);
  }
  getAllEvents() {
    return this.http.get<events[]>(`${environment.api}/api/admin/eventsDetail/`);
  }
  deleteevent(eventID: string) {
    return this.http.delete(`${environment.api}/api/admin/event/delete/${eventID}`)
  }
  updateEventNameTime(data: object, eventID: string) {
    return this.http.post(`${environment.api}/api/admin/event/update/${eventID}`, data);
  }
  getSingleEvent(eventID: string) {
    return this.http.get<events[]>(`${environment.api}/api/admin/event/detail/${eventID}`);
  }
  // Questions
  addQuestion(data: any) {
    console.log(data)
    return this.http.post(`${environment.api}/api/admin/question/create`, data);
  }
  deleteQuestion(questionID: string) {
    return this.http.delete(`${environment.api}/api/event/question/delete/${questionID}`)
  }
  // add answer

  addAnswer(data: any) {
    console.log(data)
    return this.http.post(`${environment.api}/api/admin/answer/create`, data);
  }



}
