import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../task-manager/task-manager.component.css']
})
export class HeaderComponent implements OnInit {

  title:string='Task Manager';
  @Output() toggleAddTaskForm= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

 
  toggleTask(){ 
    this.toggleAddTaskForm.emit();
    console.log("header toggle hit")
  }
}
