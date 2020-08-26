import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { TestComponent } from './test/test.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TestinstructionsComponent } from './testinstructions/testinstructions.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './register/regis.component';
import { TaketestComponent } from './taketest/taketest.component';

const routes: Routes = [
  {
    path: '' , component: LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent,
    children: [
      { path:'reportLink',component:ReportComponent, pathMatch: 'full'},
      { path:'testLink',component:TestComponent, pathMatch: 'full'}
    ]
  },
  {
    path:'studentDetailsLink',component:StudentDetailsComponent
  },
  {
    path:'testInstructionsLink',component:TestinstructionsComponent
  },
  {
    path: 'registerLink', component: RegisComponent
  },
  {
    path: 'takeTestLink', component: TaketestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
