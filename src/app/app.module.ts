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
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TestrouteComponent } from './testroute/testroute.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './register/regis.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StudentServiceService } from './service/student-service.service';
import { TaketestComponent } from './taketest/taketest.component';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportComponent,
    TestComponent,
    TestinstructionsComponent,
    StudentDetailsComponent,
    TestrouteComponent,
    LoginComponent,
    RegisComponent,
    TaketestComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
