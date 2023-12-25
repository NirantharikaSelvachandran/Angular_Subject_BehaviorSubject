import { Component, inject, OnInit } from '@angular/core';
import { TaskServicesService } from '../service/task-services.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit{

  tasks: string[] = ['task 1', 'task 2', 'task 3']

  taskService: TaskServicesService = inject(TaskServicesService);

  ngOnInit(){
    this.taskService.CreateTask.subscribe((value:any)=>{
      this.tasks.push(value);
    })
  }

}
