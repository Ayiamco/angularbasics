import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/ITask';
import { MockTasks } from 'src/app/mockData/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:ITask[]= MockTasks;
  constructor() { }

  ngOnInit(): void {
  }

}
