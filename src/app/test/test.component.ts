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
  fetchLevel:LevelFetchDto = new LevelFetchDto();
  currentLevel:any;  




  constructor(private service:TestserviceService,private router: Router){}
  fetchAllSubject(){
    this.service.fetchSubjects().subscribe(data =>{
      this.data=data;
    });
  }
  myFunction(subjectId:any , subjectName:any){
    sessionStorage.setItem("subjectId",subjectId);
    sessionStorage.setItem("subjectName", subjectName);
    this.fetchCurrentLevel();
    this.router.navigateByUrl('/dashboard/levelLink');
  }

  fetchCurrentLevel(){
    console.log("Running part 1");
    this.fetchLevel.studentId = sessionStorage.studentId;
    this.fetchLevel.subjectId = sessionStorage.subjectId;
    this.service.fetchLevelOfStudent(this.fetchLevel).subscribe(data=> {
      this.data = JSON.stringify(data);
      this.currentLevel = Object.values(data)[0];
      console.log(this.currentLevel+" is current level");
      // this.nextLevel = this.currentLevel+1;
      sessionStorage.setItem("currentLevel" , this.currentLevel);
    });
  }


}
