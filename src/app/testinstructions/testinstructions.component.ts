import { Component, OnInit } from '@angular/core';
import { TestserviceService } from "../service/testservice.service";
import { Exam } from "../models/exam";
import { Router } from '@angular/router';

@Component({
  selector: 'app-testinstructions',
  templateUrl: './testinstructions.component.html',
  styleUrls: ['./testinstructions.component.css']
})
export class TestinstructionsComponent implements OnInit {

  exam:Exam=new Exam();
  data:any
    constructor(private service:TestserviceService,private router: Router) { }
  

  ngOnInit(): void {
  }
  registerforExam(){
    this.exam.studentId=sessionStorage.studentId;
    //console.log("function called!");
    
    this.exam.subjectId=sessionStorage.subjectId;
    this.service.registerforExam(this.exam).subscribe((data:any)=>{
      sessionStorage.setItem("examId",data);
      //console.log(data);
    });
    this.router.navigateByUrl('takeTestLink');
  }

}
