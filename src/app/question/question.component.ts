import { Component, OnInit } from '@angular/core';
import { Question } from "../question";
import { QuestionService } from "../question.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions:Question[];
  constructor(private service:QuestionService) { }

  ngOnInit(): void {
    this.service.getAllQuestionAvailable().subscribe(
      data=>this.handleSuccessfulResponse(data)
    )
   }


  

  
  
handleSuccessfulResponse(response)
{
     this.questions=response;
}
deleteQuestion(subject: Question): void {
  this.service.deleteAQuestion(subject)
    .subscribe( data => {
      this.questions = this.questions.filter(u => u !==subject );
    })
};


}
