import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {

  constructor(private service: SharedService) { }
  EmployeeList:any=[];
  ActivateAddEmployeeCom:boolean = false;
  employee:any;
  ngOnInit(): void {
    this.refreshEmployeeList();
  }
  refreshEmployeeList() {
    this.service.getEmployeeList().subscribe(data=>{
      this.EmployeeList = data;
    });
  }
  addClick(){
    this.employee={
      EmployeeId:"",
      EmployeeFirstName:"",
      EmployeeLastName:"",
      EmployeeDesignation:"",
      EmployeeAddress:"",
      EmployeePhoneNumber:"",
      EmployeeEmail:"",
      EmployeePin:""
    }
    this.ActivateAddEmployeeCom = true;
  }
  closeClick() {
    this.ActivateAddEmployeeCom= false;
    this.refreshEmployeeList();
  }
}
