import { Component, OnInit } from '@angular/core';
import { SubjectService } from "../subject.service";
import { Subject } from '../subject';
import { observable } from 'rxjs';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
 subjects:Subject[];
  constructor(private service:SubjectService) { }

  ngOnInit(): void {
    this.service.getAllSubjectAvailable().subscribe(
      data=>this.handleSuccessfulResponse(data)
    )
  }
  
handleSuccessfulResponse(response)
{
    this.subjects=response;
}
deleteSubject(subject: Subject): void {
  this.service.deleteASubject(subject)
    .subscribe( data => {
      this.subjects = this.subjects.filter(u => u !==subject );
    })
};

}
