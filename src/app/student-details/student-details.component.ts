import { Component, OnInit } from '@angular/core';
import { TestserviceService } from "../service/testservice.service";
import { Exam } from "../models/exam";
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  exam:Exam=new Exam();
data:any
  constructor(private service:TestserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  registerforExam(){
  this.exam.studentId=sessionStorage.studentId;
  console.log("function called!");
  
  this.exam.subjectId=sessionStorage.subjectId;
  this.service.registerforExam(this.exam).subscribe((data:any)=>{
    sessionStorage.setItem("examId",data);
    console.log(data);
  });
  //<a [routerLink]="['/testInstructionsLink']">
  this.router.navigateByUrl('testInstructionsLink');
}
}
