import { Component, OnInit } from '@angular/core';
import { LevelFetchDto } from '../Dto/levelFetchDto';
import { FetchQuestionsDto } from '../Dto/fetchQuestionDto'; 
import { TaketestService} from '../service/taketest.service';
import { Question } from '../Entity/Question';
import { Response } from '../Entity/Response';
import { Observable } from 'rxjs';
import { ScoreDto } from '../Dto/ScoreDto';
import { ResultStatus } from '../Dto/resultStatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: []
})
export class TaketestComponent {
  fetchLevel:LevelFetchDto = new LevelFetchDto();
  currentLevel:number;
  nextLevel:any;
  data:any;
  data3:any;
  subjectId:any;
  questions: FetchQuestionsDto = new FetchQuestionsDto();
  questionList = new Array<Question>();
  questionListSize:number;
  ques:Question = new Question();
  index:number = 0;
  responseList = new Array<Response>();
  response:Response = new Response();
  isStarted = false;
  score:any = 0;
  responseMap = new Map();
  scoreDto:ScoreDto = new ScoreDto();
  resultStatus:any;

  constructor(private service: TaketestService , private router: Router){ }


  fetchCurrentLevel(){
    console.log("Running part 1");
    this.fetchLevel.studentId = sessionStorage.studentId;
    this.fetchLevel.subjectId = sessionStorage.subjectId;
    this.service.fetchLevelOfStudent(this.fetchLevel).subscribe(data=> {
      this.data = JSON.stringify(data);
      this.currentLevel = Object.values(data)[0];
      console.log(this.currentLevel+" is current level");
      this.nextLevel = this.currentLevel+1;
      sessionStorage.setItem("nextLevel" , this.nextLevel);
      this.fetchQuestions();
    });
  }
  fetchQuestions(){
    console.log("Running part 2");
    this.questions.subjectId = sessionStorage.subjectId;
    this.questions.level = this.currentLevel+1;
    console.log(this.questions.level+ " is next level");
    this.service.fetchQuestions(this.questions).subscribe(data1=> {
      this.questionList = data1;
      this.questionListSize = this.questionList.length;
      console.log(this.questionListSize);
      this.ques = this.questionList[0];
      this.isStarted = true;
    })

    // console.log(this.questionList[0].question);
    // console.log(this.questionList[1]);
    // this.nextQuestion();

  }
  nextQuestion(){
    if(this.response.studentResponse != null){

      this.responseMap.set(this.ques.questionId , this.response.studentResponse);
      console.log(this.responseMap.get(this.ques.questionId));

      // if(this.response.studentResponse == this.ques.correctAns){
      //   this.score++;
      // }
      // else{
      //   if(this.score>0){
      //     this.score--;
      //   }
      // }
      // console.log(this.score);
      this.response.responseStatus = "attempted";
      this.response.questionId= this.ques.questionId;
      this.response.examId= sessionStorage.examId;
      this.responseList.push(this.response);
    }
    else{
      this.response.responseStatus= "not attempted";
      this.response.questionId= this.ques.questionId;
      this.response.examId = sessionStorage.examId;
      this.responseList.push(this.response);
    }
    this.ques = this.questionList[++this.index];
    // console.log(this.ques)
    this.response = new  Response();
  }

  previousQuestion(){
    this.ques = this.questionList[--this.index];
  }

  submitTest(){
    if(this.response.studentResponse != null){
      this.responseMap.set(this.ques.questionId , this.response.studentResponse);
      // console.log(this.response.studentResponse);
      // if(this.response.studentResponse == this.ques.correctAns){
      //   this.score++;
      // }
      // else{
      //   if(this.score>0){
      //     this.score--;
      //   }
      //   else{
      //     this.score
      //   }
      // }
      this.response.responseStatus = "attempted";
      this.response.questionId= this.ques.questionId;
      this.response.examId= sessionStorage.examId;
      this.responseList.push(this.response);
      // console.log("Final Score="+this.score)
    }
    this.calculateScore();

  //   for (let entry of this.responseMap.entries()) {
  //     console.log(entry[0], entry[1]);    
  // }
    // this.service.sendResponses(this.responseList).subscribe(data3=> {
    //   console.log(data3);
    // })

  }

  calculateScore(){
    for(var q in this.questionList){
      if(this.responseMap.has(this.questionList[q].questionId)){
        if(this.responseMap.get(this.questionList[q].questionId) == this.questionList[q].correctAns)
        this.score++
      }
    }
    console.log(this.score);
    sessionStorage.setItem("score" , this.score);
    this.scoreDto.score = this.score;
    this.scoreDto.examId = sessionStorage.examId;
    this.scoreDto.level = this.currentLevel+1;
    this.service.sendScore(this.scoreDto).subscribe(data3=> {
      this.data3 = JSON.stringify(data3);
      this.resultStatus = Object.values(data3)[0];
      console.log(this.resultStatus);
      sessionStorage.setItem("resultStatus" , this.resultStatus);
    })
    this.router.navigate(['resultPageLink']);
  }

}
