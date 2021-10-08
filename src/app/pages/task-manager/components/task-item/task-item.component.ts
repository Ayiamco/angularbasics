import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ITask } from 'src/app/interfaces/ITask';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css','../../task-manager/task-manager.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!:ITask;
  @Output() deleteTaskEvent=new EventEmitter<ITask>()
  @Output() onToggleEvent= new EventEmitter<ITask>();
  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(task:ITask){
    this.deleteTaskEvent.emit(task)
  }

  onToggle(task:ITask){
    this.onToggleEvent.emit(task)
  }
}
