import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-guessgame',
  templateUrl: './guess-game.component.html',
  styleUrls: ['./guess-game.component.css']
})
export class GuessGameComponent implements OnInit {

  playersGuess?:number;
  currentValue?:number;
  totalGuess?:number;
  correctGuess:number=0;
  allowSubmitGuess:string="allowSubmit";
  result:string="hide-result";
  predictions?:string[];
  generate(){
    var newNum=generateNumber();
    this.currentValue=newNum;
    this.allowSubmitGuess="allowSubmit";
    this.result="hide-result";
  }

  validate(){
    this.totalGuess==undefined ? this.totalGuess=0 : this.totalGuess++;
    if(this.currentValue==this.playersGuess) this.correctGuess++;
    this.allowSubmitGuess="disallowSubmit"; 
    this.result="show-result";
    this.messageService.add(
      `Your guess was ${this.playersGuess} and the correct answer was ${this.currentValue}}`
      );
      this.predictions=this.messageService.messages;
  }
  constructor(private messageService:MessageService) {  }

  ngOnInit(): void {
    this.currentValue= generateNumber();
    this.playersGuess=10;
  }

}

function generateNumber(){
  var num1:number=parseInt((Math.random() * 10).toString()[0])
  var num2:number=parseInt((Math.random() * 10).toString()[0])
  var num3:number=parseInt((Math.random() * 10).toString()[0])
  return num1 + num2 + num3;
}


