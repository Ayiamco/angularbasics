import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import {GithubComponent} from "./github/github.component";
import { GuessGameComponent } from "./guess-game/guess-game.component";


const routes: Routes = [
  { path: 'github-users', component: GithubComponent },
  { path: 'guessgame', component: GuessGameComponent },
  { path: '', redirectTo:"/github-users" ,pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

