import { Injectable } from '@angular/core';
import { Student } from './student';
import { Exam } from './exam';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  findAllStudentsResultForSubject(exam: Exam) {
    return this.httpClient.get<Exam[]>("http://localhost:8181/FetchStudentResultsForSubject"+"/"+ exam.examSubject.subjectId);
  }
 
  findStudentsForSubject(exam: Exam) {
    


    return this.httpClient.get<Student[]>("http://localhost:8181/FetchStudentsForSubject"+"/"+ exam.examSubject.subjectId);
  }

  constructor(private httpClient:HttpClient ) {  }
}
