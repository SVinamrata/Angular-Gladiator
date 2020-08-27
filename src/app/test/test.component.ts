import { Component, OnInit } from '@angular/core';
import { TestserviceService } from "../service/testservice.service";
import { Router } from '@angular/router';
import { Exam } from "../models/exam";
import { LevelFetchDto } from '../Dto/levelFetchDto';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
  exam=new Exam();
  data:any;



  constructor(private service:TestserviceService,private router: Router){}
  fetchAllSubject(){
    this.service.fetchSubjects().subscribe(data =>{
      this.data=data;
    });
  }
  myFunction(subjectId:any , subjectName:any){
    sessionStorage.setItem("subjectId",subjectId);
    this.router.navigateByUrl('testInstructionsLink');
  }


}
