import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { TestComponent } from './test/test.component';
import { TestinstructionsComponent } from './testinstructions/testinstructions.component';
import { TestrouteComponent } from './testroute/testroute.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './register/regis.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StudentServiceService } from './service/student-service.service';
import { TaketestComponent } from './taketest/taketest.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SubjectComponent } from './subject/subject.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FetchQuestionsForSubjectComponent } from "./fetch-questions-for-subject/fetch-questions-for-subject.component";
import { StudentService } from './student.service';
import { SubjectService } from './subject.service';
import { FetchStudentsForSubjectComponent } from "./fetch-students-for-subject/fetch-students-for-subject.component";

import { QuestionComponent } from './question/question.component';

import { FetchStudentsResultForASubjectComponent } from './fetch-students-result-for-asubject/fetch-students-result-for-asubject.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportComponent,
    TestComponent,
    QuestionComponent,
    FetchStudentsResultForASubjectComponent,
    TestinstructionsComponent,
    TestrouteComponent,
    LoginComponent,
    RegisComponent,
    TaketestComponent,
    ResultPageComponent,
    LoginAdminComponent,
    HomeComponent,
    AdminDashboardComponent,
    SubjectComponent,
    AddSubjectComponent,
    AddQuestionComponent,
    FetchQuestionsForSubjectComponent,
    FetchStudentsForSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
