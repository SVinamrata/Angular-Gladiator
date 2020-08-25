import { Component, OnInit } from '@angular/core';
import { TestserviceService } from "../service/testservice.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
  data:any;
  constructor(private service:TestserviceService,private router: Router){}
  fetchAllSubject(){
    this.service.fetchSubjects().subscribe(data =>{
      this.data=data;
    });
  }
  myFunction(){
    this.router.navigateByUrl('studentDetailsLink')
  }
}
