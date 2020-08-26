import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
// import { Subject } from "../app/subjects";
import { Exam } from "../models/exam";



@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http:HttpClient) { }
  fetchSubjects(){
    return this.http.get('http://localhost:8181/testsAvailable');
  }
  registerforExam(exam:Exam){
    let url='http://localhost:8181/examRegister';
    return this.http.post(url,exam);

  }


}
