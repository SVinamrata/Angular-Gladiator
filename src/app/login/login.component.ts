import { Component, OnInit } from '@angular/core';
import { Login } from "../models/login";
import { LoginService } from "../service/login.service";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: String;

  login=new Login();
  status;
  invalidLogin = false;

  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loginStudent(form:NgForm){
   // alert(JSON.stringify(this.login));
    this.service.loginStudent(this.login).subscribe(data => {
     // alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        let studentId = data.studentId;
        let studentName = data.studentName;
        sessionStorage.setItem('studentId', studentId);
        sessionStorage.setItem('studentName', studentName);
        this.router.navigate(['dashboard']);
      }
      else {
        this.message = data.message;
        this.router.navigate(['']);
      }
    })
  }

}
