import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question:Question=new Question();

  constructor(private service:QuestionService) { }

  ngOnInit(): void {
  }
  addQuestion(): void {
    
    this.service.addAQuestion(this.question);
  
  };
  yearOC(event){
 
    event.preventDefault();
   
    
  }

}





