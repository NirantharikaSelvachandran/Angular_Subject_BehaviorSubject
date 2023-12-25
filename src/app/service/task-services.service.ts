import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServicesService {

  constructor() { }

  //CreateTask : EventEmitter<string> = new EventEmitter<string>();

  CreateTask = new Subject();

  /*OnCreateTask(value:string){
    this.CreateTask.emit(value);
  }*/

  OnCreateTask(value: string) {
    this.CreateTask.next(value);
  }
}