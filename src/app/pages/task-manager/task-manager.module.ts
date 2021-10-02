import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';



const routes:Routes=[
  {
    path:"", component:TaskManagerComponent
  }
]
@NgModule({
  declarations: [
    AboutComponent,
    FooterComponent,
    TaskManagerComponent,
    HeaderComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TaskManagerModule { }
