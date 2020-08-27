import { Component, OnInit } from '@angular/core';
import { MadhyaPradesh } from "./MadhyaPradesh";
import { Rajasthan } from "./Rajasthan";
import { UttarPradesh } from "./UttarPradesh";
import { Uttrakhand } from "./Uttrakhand";
import { State } from "./state";
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Student } from "../Entity/student";
import { StudentServiceService } from "../service/student-service.service";
import { Router } from '@angular/router';


@Component({
  
  selector: 'app-regis',
  templateUrl:'./regis.component.html', 
  styleUrls: ['./regis.component.css'
  
  ]
})
export class RegisComponent implements OnInit {

  data:any;

  constructor(private service:StudentServiceService, private router:Router) { }


  student:Student = new Student();
  confirmPass:any="";

  



  



  modifiedText: string;

  ngOnInit(){
   
   
   // this.empl.Name=this.employee.indexOf(this.empSelected)[1];
    
    
    
  }
  
  onStateSelected()
  {
    console.log(this.student.studentEmail);
    console.log(this.student.studentPassword);
   
  

      
    
  }
  yearOC(event){ 
    event.preventDefault();
  }
  onDistrictSelected(event:any)
  {
    console.log(this.student.studentEmail);
    console.log(this.student.studentPassword); 
  
    
  }
  register1()
  { console.log(this.student.studentEmail);
    console.log(this.student.studentPassword);
    
    
    this.service.registerStudent(this.student).subscribe(data =>
       {
          alert(JSON.stringify(data));
          this.data = JSON.stringify(data);
          if(Object.values(data)[0] == "SUCCESS")
          {
            this.Email();
            this.router.navigate(['']);
          }
          else{
            alert(JSON.stringify(data));
            this.router.navigate(['registerLink']);
          }

 `  ` })

  }
  Email()
  {
    this.service.sendEmail(this.student).subscribe(data=>console.log(data));
  }
  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }
  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
  }
  
  confirmPassword(): boolean {
    if (this.student.studentPassword == this.confirmPass){
      return true;      
    }
    return false;
  }
}