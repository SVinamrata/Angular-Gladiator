import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResultService } from '../service/result.service'
import { StudentIdDto } from '../Dto/StudentIdDto'; 


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  student= new StudentIdDto();
  data:any;

  constructor(private service: ResultService) { }

  // ngOnInit(): void {
  // }

  viewResults(){
    this.student.studentId = sessionStorage.studentId;
    this.service.viewResults(this.student).subscribe(data=>{
      this.data = data;
    })
  }


}
