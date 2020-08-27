import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { TestComponent } from './test/test.component';
import { TestinstructionsComponent } from './testinstructions/testinstructions.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './register/regis.component';
import { TaketestComponent } from './taketest/taketest.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { LoginAdminComponent } from "./login-admin/login-admin.component";
import { HomeComponent } from "./home/home.component";
import { TestrouteComponent } from "./testroute/testroute.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

import { AddSubjectComponent } from './add-subject/add-subject.component';
import { QuestionComponent } from './question/question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FetchQuestionsForSubjectComponent } from './fetch-questions-for-subject/fetch-questions-for-subject.component';
import { FetchStudentsForSubjectComponent } from './fetch-students-for-subject/fetch-students-for-subject.component';
import { FetchStudentsResultForASubjectComponent } from "./fetch-students-result-for-asubject/fetch-students-result-for-asubject.component";
import { SubjectComponent } from './subject/subject.component';


const routes: Routes = [
  {
    path:'' , component: HomeComponent
  },
  {
    path:'AdminLink' , component: LoginAdminComponent
  },
  {
    path: 'loginLink' , component: LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent,
    children: [
      { path:'reportLink',component:ReportComponent, pathMatch: 'full'},
      { path:'testLink',component:TestComponent, pathMatch: 'full'},
      { path:'levelLink',component:TestrouteComponent, pathMatch: 'full'}
    ]
  },
  {
    path:'testInstructionsLink',component:TestinstructionsComponent
  },
  {
    path: 'registerLink', component: RegisComponent
  },
  {
    path: 'takeTestLink', component: TaketestComponent
  },
  {
    path: 'resultPageLink', component: ResultPageComponent
  },
  {
    path:'AdminDashboardLink' , component: AdminDashboardComponent,
    children: [
      { path: 'subject', component: SubjectComponent },
      { path: 'addSubject', component: AddSubjectComponent },
      { path: 'question', component: QuestionComponent },
      { path: 'addQuestion', component: AddQuestionComponent },
      { path: 'FetchQuestionForSubject', component: FetchQuestionsForSubjectComponent },
      
      { path: 'FetchStudentsForSubject', component: FetchStudentsForSubjectComponent },
      
    
    
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
