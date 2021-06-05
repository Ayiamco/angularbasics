import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {GithubUser} from "../githubUser";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  users?:GithubUser[]
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.api.getGithubUsers().subscribe(x=> this.users= x)
  }

}
