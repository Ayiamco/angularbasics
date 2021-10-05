import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskService } from 'src/app/services/task-service.service';
import { HttpClientModule } from '@angular/common/http';



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
    TaskItemComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers:[TaskService]
})
export class TaskManagerModule { }
