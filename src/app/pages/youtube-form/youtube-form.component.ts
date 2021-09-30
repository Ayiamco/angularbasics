import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-youtube-form',
  templateUrl: './youtube-form.component.html',
  styleUrls: ['./youtube-form.component.css']
})
export class YoutubeFormComponent implements OnInit {

  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup=this._formBuilder.group({
      firstCtrl:["",[Validators.required,Validators.minLength(10)]]
    })
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  proceedToNext(stepper:MatStepper){
    if(!this.firstFormGroup.invalid) stepper.next();
  }
}
