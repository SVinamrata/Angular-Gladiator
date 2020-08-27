import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  subject:Subject=new Subject();

  constructor(private service:SubjectService) { }

  ngOnInit(): void {
  }
  addSubject(): void {
    this.service.addASubject(this.subject);

  };
  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
  }
 

}
