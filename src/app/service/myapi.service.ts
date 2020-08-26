// import { Injectable } from '@angular/core';
// import { Observable, from } from 'rxjs';
// import { HttpClient, HttpParams } from '@angular/common/http';
// // import { StudentInfo } from '../Entity/StudentInfo';



// @Injectable()
// export class MyApiService{


//     //I will not create the objet of HttpClient manually. Use of dependency injection here.
//     constructor( private httpClient:HttpClient){} //new object

//     registerUser(user: StudentInfo): Observable<any> {
//         var url = "http://localhost:8080/UserInfoWebApi/rest/userResource/";
//         return this.httpClient.post(url, user);
//     }

//     loginUser(user: StudentInfo): Observable<any> {
//         var url = "http://localhost:8080/UserInfoWebApi/rest/userResource/login";
//         return this.httpClient.post(url,user);
//     }



// }