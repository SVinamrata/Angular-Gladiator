import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('studentId')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('studentId');
    sessionStorage.removeItem('studentName');
  }
}
