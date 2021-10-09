import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import {GithubComponent} from "./pages/github/github.component";
import { GuessGameComponent } from "./pages/guess-game/guess-game.component";
import { HomeComponent } from "./pages/home/home.component";


const routes: Routes = [
  { path: 'github-users', component: GithubComponent },
  { path: 'guessgame', component: GuessGameComponent },
  { path: 'home', component: HomeComponent },
  { 
    path: 'youtube-form', 
    loadChildren: ()=> import("./pages/youtube-form/youtube-form.module")
    .then(x=> x.YoutubeFormModule) 
  },
  { 
    path: 'smile', 
    loadChildren: ()=> import("./pages/smile/smile.module")
    .then(x=> x.SmileModule) 
  },
  {
    path:'task-manager',
    loadChildren:()=> import('./pages/task-manager/task-manager.module')
    .then(m=> m.TaskManagerModule)
  },
  { path: '', redirectTo:"/home" ,pathMatch:"full" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

