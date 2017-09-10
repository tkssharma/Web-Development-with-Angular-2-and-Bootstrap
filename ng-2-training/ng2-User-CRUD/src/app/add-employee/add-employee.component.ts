import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public employeeForm:FormGroup;
  
  constructor(private fb:FormBuilder, private service:EmployeeService, private route:Router) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      'name':[null,[Validators.required]],
      'phone':[null,[Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
      'email':[null,[Validators.required, Validators.pattern(`^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$`)]],
      'address':[null,[Validators.required]],
      'id':[Math.floor(Math.random() * 100) + 1 ]
    });
  }
  
  submitEmployee(){
    this.employeeForm.controls['name']
    this.service.log(this.employeeForm.value);

    this.service.addEmployee(this.employeeForm.value)
    .then(()=>{
      this.route.navigateByUrl('');
    }
    );
  }

  checkNumberLength(ip){
    this.service.log('in ip');
    if(this.employeeForm.controls['phone'].value<9999999999 && this.employeeForm.controls['phone'].value>1000000000 ) return true;
    else if (typeof this.employeeForm.controls['phone'].value !== typeof 10){
      this.employeeForm.controls['phone'].setValue(0);
    } else 
      this.employeeForm.controls['phone'].setValue(parseInt(this.employeeForm.controls['phone'].value.toString().slice(0,10)))
  }
}
