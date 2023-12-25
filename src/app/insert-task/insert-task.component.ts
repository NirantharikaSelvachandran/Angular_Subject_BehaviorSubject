import { Component, Inject } from '@angular/core';
import { TaskServicesService } from '../service/task-services.service';

@Component({
  selector: 'app-insert-task',
  templateUrl: './insert-task.component.html',
  styleUrl: './insert-task.component.css'
})
export class InsertTaskComponent {

  newTask: string = '';

  constructor(private taskService: TaskServicesService) {}

  OnCreateTasks(){
    console.log(this.newTask);
    this.taskService.OnCreateTask(this.newTask);
  }

}
