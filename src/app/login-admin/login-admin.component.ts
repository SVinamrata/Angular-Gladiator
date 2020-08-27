import { Component, OnInit } from '@angular/core';
import { Login } from "../models/login";
import { NgForm } from "@angular/forms";
import { LoginAdminServiceService } from "../service/login-admin-service.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  message: String;

  login=new Login();
  status;
  invalidLogin = false;

  constructor(private service:LoginAdminServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  loginAdmin(form:NgForm){
    alert(JSON.stringify(this.login));
    this.service.loginAdmin(this.login).subscribe(data => {
     alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        let adminId = data.adminId;
        let adminName = data.adminName;
        sessionStorage.setItem('adminId', adminId);
        sessionStorage.setItem('adminName', adminName);
        this.router.navigate(['AdminDashboardLink']);
      }
      else {
        this.message = data.message;
      }
    })
  }

}
