import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from '../interfaces/ITask';
import { MockTasks } from '../mockData/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  jsonServerBaseUrl="localhost:5000"
  constructor(private httpClient:HttpClient) { }

  getTask():Observable<ITask[]>{
    return this.httpClient.get<ITask[]>(`${this.jsonServerBaseUrl}/tasks`)
  }
}
