import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { ShowEmployeesComponent } from './employees/show-employees/show-employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AddAttendanceComponent } from './attendance/add-attendance/add-attendance.component';
import { ShowAttendanceComponent } from './attendance/show-attendance/show-attendance.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ShowEmployeesComponent,
    AddEmployeeComponent,
    AttendanceComponent,
    AddAttendanceComponent,
    ShowAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
