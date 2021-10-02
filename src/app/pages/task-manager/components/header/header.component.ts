import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../task-manager/task-manager.component.css']
})
export class HeaderComponent implements OnInit {

  title:string='Task Manager';
  constructor() { }

  ngOnInit(): void {
  }

}
