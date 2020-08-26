import { Component, OnInit } from '@angular/core';
import { LevelFetchDto } from '../Dto/levelFetchDto';
import { FetchQuestionsDto } from '../Dto/fetchQuestionDto'; 
import { TaketestService} from '../service/taketest.service';
import { Question } from '../Entity/Question';
import { Response } from '../Entity/Response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.css']
})
export class TaketestComponent {
  fetchLevel:LevelFetchDto = new LevelFetchDto();
  currentLevel:number;
  data:any;
  subjectId:any;
  questions: FetchQuestionsDto = new FetchQuestionsDto();
  questionList = new Array<Question>();
  ques:Question = new Question();
  index:number = 0;
  responseList = new Array<Response>();
  response:Response = new Response();

  constructor(private service: TaketestService){ }


  fetchCurrentLevel(){
    console.log("Running part 1");
    this.fetchLevel.studentId = sessionStorage.studentId;
    this.fetchLevel.subjectId = sessionStorage.subjectId;
    this.service.fetchLevelOfStudent(this.fetchLevel).subscribe(data=> {
      this.data = JSON.stringify(data);
      this.currentLevel = Object.values(data)[0];
      console.log(this.currentLevel+"is current level");
      this.fetchQuestions();
    });
  }
  fetchQuestions(){
    console.log("Running part 2");
    this.questions.subjectId = sessionStorage.subjectId;
    this.questions.level = this.currentLevel+1;
    console.log(this.questions.level+ "is next level");
    this.service.fetchQuestions(this.questions).subscribe(data1=> {
      this.questionList = data1;
    })
    // console.log(this.questionList[0].question);
    // console.log(this.questionList[1]);
    // this.nextQuestion();
  }
  nextQuestion(){
    if(this.response.studentResponse){
      this.response.responseStatus = "attempted";
      this.response.questionId= this.ques.questionId;
      this.response.examId= sessionStorage.examId;
      this.responseList.push(this.response);
    }
    this.ques = this.questionList[this.index++];
    this.response = null;
  }

  previousQuestion(){
    this.ques = this.questionList[--this.index];
  }

  submitTest(){

  }

}
