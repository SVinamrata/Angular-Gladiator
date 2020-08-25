import { Injectable } from '@angular/core';
import { Student } from '../Entity/student';
import {HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  constructor(private http:HttpClient){

  }
 
  registerStudent(student: Student) {
    console.log("password"+student.studentPassword);
    
   let url='http://localhost:8181/register';
   return this.http.post(url,student);
  }

 
}
