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

  nameOfStudent:any;
  stateSelected:any="Uttrakhand";
  stateselected1:any;
  
  districtSelected:any="Dehradun";

//  empl : Employee=new Employee();
  state:State[]=[ { Id:1,Name:"Uttrakhand"},
  {Id:2,Name:"Uttar Pradesh"},
  { Id:3,Name:"Madhya Pradesh"},
  {Id:4,Name:"Rajasthan"}];

  mp:MadhyaPradesh[]=[ { id:1,districtName:"Jabalpur"},
  {id:2,districtName:"Bhopal"},
  { id:3,districtName:"Indore"},
  {id:4,districtName:"NarsinghPur"}];

  uk:Uttrakhand[]=[ { id:1,districtName:"Dehradun"},
  {id:2,districtName:"Roorkie"},
  { id:3,districtName:"Haridwar"},
  {id:4,districtName:"Garhwal"}];

  up:UttarPradesh[]=[ { id:1,districtName:"Amethi"},
  {id:2,districtName:"GorakhPur"},
  { id:3,districtName:"Lucknow"},
  {id:4,districtName:"Gaziabad"}];

  rj:Rajasthan[]=[ { id:1,districtName:"Jaipur"},
  {id:2,districtName:"Kota"},
  { id:3,districtName:"Jaisalmer"},
  {id:4,districtName:"Jodhpur"}];

  



  modifiedText: string;

  ngOnInit(){
   
   // this.empl.Name=this.employee.indexOf(this.empSelected)[1];
    
    
    
  }
  isMadhyaPradesh:boolean=false;
  isUttrakhand:boolean=true;
  isUttarPradesh:boolean=false;
  isRajasthan:boolean=false;
  onStateSelected(event:any)
  {
    if(event=="Uttrakhand")
    {
      this.stateselected1="Uttrakhand";
      this.districtSelected="Dehradun"
      this.isMadhyaPradesh=false;
      this.isUttrakhand=true;
      this.isMadhyaPradesh=false;
      this.isRajasthan=false;

    }
    else if (event=="Madhya Pradesh") {
      this.stateselected1="Madhya Pradesh";
      this.districtSelected="Jabalpur";
      this.isMadhyaPradesh=true;
      this.isUttrakhand=false;
      this.isRajasthan=false;
      this.isUttarPradesh=false;
      
    } 
    else if (event=="Uttar Pradesh") {
      this.stateselected1="UttarPradesh";
      this.districtSelected="Amethi";
      this.isMadhyaPradesh=false;
      this.isUttrakhand=false;
      this.isUttarPradesh=true;
      this.isRajasthan=false;

      
    }
      
    else if(event=="Rajasthan")
    {
      this.stateselected1="Rajasthan";
      this.districtSelected="Kota";
      this.isMadhyaPradesh=false;
      this.isUttrakhand=false;
      this.isUttarPradesh=false;
      this.isRajasthan=true;
      
    }
  }
  onDistrictSelected(event:any)
  { 
    this.student.studentCity=this.districtSelected;
    this.student.studentState=this.stateSelected;
    
  }
  register1()
  { console.log(this.student.studentEmail);
    console.log(this.student.studentPassword);
    
    
    this.service.registerStudent(this.student).subscribe(data => {
      // alert(JSON.stringify(data));
      this.data = JSON.stringify(data);
      if(Object.values(data)[0] == "SUCCESS"){
        this.router.navigate(['']);
      }
      else{
        alert(JSON.stringify(data));
        this.router.navigate(['registerLink']);
      }

  })

}
}