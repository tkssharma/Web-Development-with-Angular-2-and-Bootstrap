import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  private EmployeeMockDB:any[];

  constructor() {

    if (localStorage.getItem('employee')) {
      this.EmployeeMockDB = JSON.parse(localStorage.getItem('employee'))
    }
    else {
      this.EmployeeMockDB = [
        {
          name: "Christian Mckee",
          phone: "0638051176",
          email: "sem.mollis@pharetrased.ca",
          address: "P.O. Box 686, 3455 Dui, Rd.",
          id: 28
        },
        {
          name: "Craig Maynard",
          phone: "0103328403",
          email: "non.justo.Proin@sociisnatoque.org",
          address: "Ap #405-1825 Posuere St.",
          id: 17
        },
        {
          name: "Lester Gilliam",
          phone: "0492571446",
          email: "lacus@ut.com",
          address: "P.O. Box 420, 529 Felis Avenue",
          id: 4
        },
        {
          name: "Clarke Lawson",
          phone: "0565589507",
          email: "porttitor.eros.nec@cursusInteger.edu",
          address: "8595 Nulla Rd.",
          id: 94
        },
        {
          name: "Marvin Roach",
          phone: "0426719504",
          email: "lacus.pede@atiaculisquis.edu",
          address: "5732 Augue Rd.",
          id: 6
        },
        {
          name: "Holmes Barnes",
          phone: "0137215825",
          email: "libero.mauris.aliquam@enimgravidasit.co.uk",
          address: "P.O. Box 168, 9498 Adipiscing Road",
          id: 25
        },
        {
          name: "Lee Carroll",
          phone: "0689970649",
          email: "sem@purusDuis.co.uk",
          address: "Ap #910-2680 Aliquam, Ave",
          id: 50
        },
        {
          name: "Tanner Williamson",
          phone: "0151888293",
          email: "dui@temporarcuVestibulum.ca",
          address: "Ap #204-3482 Ut Av.",
          id: 85
        },
        {
          name: "Kamal Farrell",
          phone: "0579194704",
          email: "ullamcorper@Nullam.ca",
          address: "400-1982 Vitae, Rd.",
          id: 100
        },
        {
          name: "Jackson Ferguson",
          phone: "0347926094",
          email: "neque.tellus@enimcondimentumeget.co.uk",
          address: "Ap #169-4939 Blandit Ave",
          id: 20
        }
      ]
    }
  }
    
    getEmployee():any{
      return new Promise(resolve=>resolve(this.EmployeeMockDB));
    }
    
    addEmployee(employe):any{
      return new Promise((resolve)=>{
        this.EmployeeMockDB.push(employe);
        localStorage.setItem('employee',JSON.stringify(this.EmployeeMockDB))
        this.log(this.EmployeeMockDB,'add');
        resolve(JSON.parse(localStorage.getItem('employee')));
      });
    }

    updateEmployee(employe):any{
      return new Promise((resolve)=>{
        let index = this.EmployeeMockDB.findIndex(e => e.id == employe.id);
        this.EmployeeMockDB[index] = employe;
        localStorage.setItem('employee',JSON.stringify(this.EmployeeMockDB))
        this.log(this.EmployeeMockDB,'update');
        resolve(JSON.parse(localStorage.getItem('employee')));
      });
    }
    
  deleteEmployee(id:number):any{
    return new Promise((resolve)=>{ 
      let index = this.EmployeeMockDB.findIndex(key=>key.id==id);
        this.EmployeeMockDB.splice(index,1);
        localStorage.setItem('employee',JSON.stringify(this.EmployeeMockDB))        
        this.log(this.EmployeeMockDB,'deleted');        
        resolve(JSON.parse(localStorage.getItem('employee')));
      });
  }

    log(data:any,data2?:any){
      console.log(data, data2);    
    }
}
