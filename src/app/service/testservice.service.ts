import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
// import { Subject } from "../app/subjects";


@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http:HttpClient) { }
  fetchSubjects(){
    return this.http.get('http://localhost:8181/testsAvailable');
  }
}
