import { Component, OnInit } from '@angular/core';
import { IGuessData } from '../../interfaces/IGuessData';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-guessgame',
  templateUrl: './guess-game.component.html',
  styleUrls: ['./guess-game.component.css']
})
export class GuessGameComponent implements OnInit {

  playersGuess?:number;
  currentValue?:number;
  totalGuess:number=0;
  correctGuess:number=0;
  allowSubmitGuess:boolean=true;
  isCorrectGuess:boolean=false;
  predictions:IGuessData[]=[];
  generate(){
    var newNum=generateNumber();
    this.currentValue=newNum;
    this.allowSubmitGuess=true;
  }

  validate(){
    if(this.currentValue==this.playersGuess){
       this.correctGuess++;
       this.isCorrectGuess=true
    }
    else this.isCorrectGuess=false;

    this.totalGuess++;
    this.allowSubmitGuess=false; 
    this.predictions.push({
        data:`Your guess was ${this.playersGuess} and the correct answer was ${this.currentValue}`,
        status: this.isCorrectGuess? "guess-correct" : "guess-fail"
      });
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


