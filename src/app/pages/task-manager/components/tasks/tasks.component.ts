import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/ITask';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks!:ITask[];
  @Input() showAddTask=false;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((resp)=>{
      this.tasks=resp
    })
  }

  onAddTask(event:ITask){
    console.log(event)
    var newTask:ITask={text:"THIS IS IT",day:"29TH ",reminder:true}
    this.taskService.addTask(newTask)
    this.taskService.getTasks().subscribe((resp)=>{
      this.tasks=resp
    })
  }

  deleteTask(task:ITask){
    this.taskService.deleteTask(task)
    this.taskService.getTasks().subscribe((resp)=> this.tasks=resp)
  }

  handleToggleEvent(task:ITask){
    this.taskService.toggleTaskReminder(task.id!);
    this.tasks.forEach(x=> {if(x.id==task.id) x.reminder=!x.reminder});
  }


}
