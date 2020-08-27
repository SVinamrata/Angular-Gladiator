import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  name:any = sessionStorage.studentName;
  score:any = sessionStorage.score;
  level:any = sessionStorage.nextLevel;
  subjectName:any = sessionStorage.subjectName;
  message1:any;
  message2:any;
  message3:any;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("resultStatus") == stringify("Passed")){
      console.log("same");
      this.message1 = "Thank You !!!";
      this.message2 = "You have cleared Level "+this.level;
      if(this.level == 3)
        this.message3 = "You Have Passed All Levels";
      else
        this.message3= "You can move to the next Level";
    }
    else{
      this.message1 = "Sorry!";
      this.message2 = "You were unable to clear Level "+this.level;
      this.message3 = "You can reattempt later";
    }
  }

}
