import { Component, OnInit } from '@angular/core';
import { Student } from "../student";
import { StudentService } from "../student.service";
import { Exam } from "../exam";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-fetch-students-for-subject',
  templateUrl: './fetch-students-for-subject.component.html',
  styleUrls: ['./fetch-students-for-subject.component.css']
})
export class FetchStudentsForSubjectComponent implements OnInit {
  student:Student=new Student();
  students:Student[];
  isdata:boolean=false;
  exam:Exam= new Exam();

  constructor(private service:StudentService) { }

  ngOnInit(): void {
   
  }
  findQuestionsForSubject()
  {
    this.isdata=true;
    this.service.findStudentsForSubject(this.exam).subscribe
    (data=>this.handleSuccessfulResponse(data));
    
    
    

  }

  
  
handleSuccessfulResponse(response)
{
    this.students=response;
    console.log(this.students[0].studentName);
}


}
