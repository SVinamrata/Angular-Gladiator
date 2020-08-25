import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { Status } from "../models/status";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginStudent(login:Login):Observable<Status>{
    let url="http://localhost:8181/loginstudent";
    return this.http.post<Status>(url,login);
  }

}
