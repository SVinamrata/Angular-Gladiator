import { Injectable } from '@angular/core';
import { Student } from '../Entity/student';
import {HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  sendEmail(student: Student) {
    let url='http://localhost:8181/hello';
    return this.http.post(url,student);
  }
  constructor(private http:HttpClient){

  }
 
  registerStudent(student: Student) {
    //console.log("password"+student.studentPassword);
    
   let url='http://localhost:8181/register';
   return this.http.post(url,student);
  }

 
}
