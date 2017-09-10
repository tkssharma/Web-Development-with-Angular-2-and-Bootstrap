import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';

import { EmployeeService } from './employee.service';

const routes:Routes=[
  {path: ' ', component: EmployeeComponent},
  {path: 'add', component: AddEmployeeComponent},
  {path: '**', component: EmployeeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
