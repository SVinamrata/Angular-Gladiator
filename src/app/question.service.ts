import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  findQuestionsForSubject(question: Question) {
    return this.httpClient.get<Question[]>("http://localhost:8181/FetchQuestionForSubject"+"/"+question.questionSubject.subjectId);
  }
  deleteAQuestion(question: Question) {
    return this.httpClient.delete<Question>("http://localhost:8181/deleteQuestion" + "/"+ question.questionId);

   
  }
  getAllQuestionAvailable() {
    console.log("Question call");
    return this.httpClient.get<Question[]>('http://localhost:8181/viewAllQuestion');
  }
  addAQuestion(question: Question) {
    console.log("password"+question.question);
    
    
   let url='http://localhost:8181/addNewQuestion';
   return this.httpClient.post(url,question).subscribe
   (user=>{
     alert(JSON.stringify(user))
    
   });
  }

  constructor(private httpClient:HttpClient ) {  }
}









  

