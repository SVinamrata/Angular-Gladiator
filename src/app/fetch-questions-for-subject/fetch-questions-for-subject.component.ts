import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-fetch-questions-for-subject',
  templateUrl: './fetch-questions-for-subject.component.html',
  styleUrls: ['./fetch-questions-for-subject.component.css']
})
export class FetchQuestionsForSubjectComponent implements OnInit {
  question:Question=new Question();
  questions:Question[];
  isdata:boolean=false;

  constructor(private service:QuestionService) { }

  ngOnInit(): void {
  }

  findQuestionsForSubject()
  {
    this.service.findQuestionsForSubject(this.question).subscribe
    (data=>this.handleSuccessfulResponse(data));
    this.isdata=true;

  }

  
  
handleSuccessfulResponse(response)
{
    this.questions=response;
}

}
