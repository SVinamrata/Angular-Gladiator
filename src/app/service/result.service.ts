import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentIdDto } from '../Dto/StudentIdDto';


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor( private http:HttpClient){}

  viewResults(studentId: StudentIdDto){
    return this.http.post('http://localhost:8181/result' , studentId);
  }


}
