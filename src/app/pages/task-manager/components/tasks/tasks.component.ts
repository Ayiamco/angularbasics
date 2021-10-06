import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/ITask';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks!:ITask[];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((resp)=>{
      this.tasks=resp
    })
  }

  addDummyTask(){
    var dummyTask:ITask={text:"THIS IS IT",day:"29TH ",reminder:true}
    this.taskService.addTask(dummyTask)
    this.taskService.getTask().subscribe((resp)=>{
      this.tasks=resp
    })
  }

}
