import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from '../interfaces/ITask';
import { MockTasks } from '../mockData/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task=MockTasks
  constructor(private httpClient:HttpClient) { }

  getTasks():Observable<ITask[]>{
    let taskInStorage=localStorage.getItem("tasks")
    if(!taskInStorage){
      let task=of<ITask[]>(this.task)
      return task;
    }
   else{
    let taskObservable=of<ITask[]>(JSON.parse(taskInStorage))
     return taskObservable;
   }
  }

  addTask(newTask:ITask){
    this.task.push(newTask)
    localStorage.setItem("tasks",JSON.stringify(this.task))
  }

  deleteTask(task:ITask){
    this.task=this.task.filter(x=> x.id != task.id)
    localStorage.setItem("tasks",JSON.stringify(this.task))
  }
  toggleTaskReminder(id:Number){
    this.task.forEach(x=>{ if(x.id==id) x.reminder= !x.reminder})
    localStorage.setItem("tasks",JSON.stringify(this.task))
  }
}
