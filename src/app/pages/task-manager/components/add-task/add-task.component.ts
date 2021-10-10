import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  newTaskData!:FormGroup
  @Input() showAddTask:boolean=false;
  @Output() addTask= new EventEmitter<ITask>();

  constructor(private formBuilder: FormBuilder,private matsnackbar:MatSnackBar) { }

  ngOnInit(): void {
   this.newTaskData= this.formBuilder.group({
     "textCtrl":new FormControl("",[Validators.required]),
     "dayCtrl": new FormControl("",[Validators.required]),
     "reminderCtrl":new FormControl(false)
   })
  }

  onSubmit(){ 
    if(!this.newTaskData.invalid){
      this.addTask.emit({
        text:this.newTaskData.controls["textCtrl"].value,
        reminder:this.newTaskData.controls["reminderCtrl"].value,
        day:this.newTaskData.controls["dayCtrl"].value
      })

      //reset state to default values
      this.reminder=false;
      this.text="";
      this.day="";
    }
    else{
      this.matsnackbar.open("Error occured","Error")
    }
  }
    
}
