import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { LevelFetchDto } from '../Dto/levelFetchDto';
import { FetchQuestionsDto } from '../Dto/fetchQuestionDto';
import { Question } from '../Entity/Question';
import { Observable, from } from 'rxjs';
import { Response } from '../Entity/Response';

@Injectable({
  providedIn: 'root'
})
export class TaketestService {

  constructor(private httpClient:HttpClient) { }

  fetchLevelOfStudent(levelFetch: LevelFetchDto){
    let url='http://localhost:8181/levelFetch';
    return this.httpClient.post(url,levelFetch);
  }

  fetchQuestions(fetchQues: FetchQuestionsDto):Observable<any>{
    let url='http://localhost:8181/questionsFetch';
    return this.httpClient.post(url , fetchQues);
  }

  sendResponses(reponses: Observable<Response>){
    let url='http://localhost:8181/submitResponses';
    return this.httpClient.post(url, reponses);
  }

}
