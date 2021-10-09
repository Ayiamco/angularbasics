import { Component, OnInit } from '@angular/core';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  showAddTaskForm=true;
  constructor() { }

  ngOnInit(): void {
  }

  handleToggleTask(){
    console.log("this is it")
    this.showAddTaskForm=!this.showAddTaskForm
    console.log("this is it")
  }

}
