import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Exam } from '../exam';
import { StudentService } from '../student.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-fetch-students-result-for-asubject',
  templateUrl: './fetch-students-result-for-asubject.component.html',
  styleUrls: ['./fetch-students-result-for-asubject.component.css']
})
export class FetchStudentsResultForASubjectComponent implements OnInit {

  student:Student=new Student();
  students:Student[];
  isdata:boolean=false;
  exam:Exam= new Exam();

  constructor(private service:StudentService) { }

  ngOnInit(): void {
   
  }
  findQuestionsForSubject()
  {
    this.isdata=false;
    this.service.findAllStudentsResultForSubject(this.exam).subscribe
    (data=>this.handleSuccessfulResponse(data));
    
    
    

  }

  
  
handleSuccessfulResponse(response)
{
    alert(response);
}

}
