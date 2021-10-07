import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmileComponent } from './smile.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"",component:SmileComponent}
]

@NgModule({
  declarations: [
    SmileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SmileModule { }
