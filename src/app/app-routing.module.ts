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
      { path:'testLink',component:TestComponent, pathMatch: 'full'}
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
