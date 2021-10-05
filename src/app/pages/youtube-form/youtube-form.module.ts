import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeFormComponent } from './youtube-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule,Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes=[
  {path:'',component:YoutubeFormComponent,children:[
    {path:"",component:YoutubeFormComponent},
  ]},
  {path:"**",redirectTo:""}
];
@NgModule({
  declarations: [
    YoutubeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    HttpClientModule
  ]
})
export class YoutubeFormModule { }
