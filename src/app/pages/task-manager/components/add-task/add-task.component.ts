import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/interfaces/ITask';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css','../../task-manager/task-manager.component.css']
})
export class AddTaskComponent implements OnInit {

  text:string="";
  reminder:boolean=false;
  day:string="";
  @Input() showAddTask:boolean=false;

  @Output() addTask= new EventEmitter<ITask>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
   //todo:Add form validation and snackbar for error display 
  
    this.addTask.emit({
      text:this.text,
      reminder:this.reminder,
      day:this.day
    })

    //reset state to default values
    this.reminder=false;
    this.text="";
    this.day="";
  }
}
