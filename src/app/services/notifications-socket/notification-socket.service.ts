import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import hostname from 'src/app/config';


@Injectable({
  providedIn: 'root'
})
export class NotificationsSocketService {

  socket: any;
  readonly uri: string = hostname;

  constructor() {
    this.socket = io(this.uri);
  }


  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
