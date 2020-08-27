import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "./subject";


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  addASubject(subject: Subject) {
    console.log("password"+subject.subjectName);
    
    
   let url='http://localhost:8181/addNewSubject';
   return this.httpClient.post(url,subject).subscribe
   (user=>{
     alert(JSON.stringify(user))
    
   });
  }

  

  constructor(
    private httpClient:HttpClient
  ) { 
     }


getAllSubjectAvailable()
  {
    console.log("subject call");
    return this.httpClient.get<Subject[]>('http://localhost:8181/testsAvailable');
  }

  public deleteASubject(subject) {
    return this.httpClient.delete<Subject>("http://localhost:8181/delete" + "/"+ subject.subjectId);
  }

  

}
