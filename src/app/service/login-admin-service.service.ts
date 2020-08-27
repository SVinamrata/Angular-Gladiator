import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Status } from "../models/status";
import { Observable } from 'rxjs';
import { Login } from "../models/login";
@Injectable({
  providedIn: 'root'
})
export class LoginAdminServiceService {

  constructor( private http:HttpClient) { }

  loginAdmin(login:Login):Observable<Status>{
    let url="http://localhost:8181/loginAdmin";
    return this.http.post<Status>(url,login);
  }

}
