import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {GithubUser} from "../interfaces";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  currentWindowSize?:number;
  users?:GithubUser[];
  username?:string;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getWindowSize();
  }

  getUsers(){
    this.api.getGithubUsers().subscribe(x=> this.users= x)
  }

  getUser(){
    let githubUsername= this.username ? this.username : "ayiamco";
    let userUrl="https://api.github.com/users/" + githubUsername;
    this.api.getGithubUser(userUrl).subscribe(x=>{
      this.users?.unshift(x);
      return;
    })
  }

  getWindowSize(){
    this.currentWindowSize=window.innerWidth
  }

}
