import { Component } from '@angular/core';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: SharedService) { }
  title = 'EmployeeAttendanceSystem';
  EmployeeList:any=[];
  buttonDisabled:any;
  buttonName = "";
  ActivateAddEmployeeCom:boolean = false;
  employee:any;
  ngOnInit(): void {
    this.buttonDisabled = true; 
    this.refreshEmployeeList();
    if (this.buttonDisabled === false) {
      this.buttonName = "Create Admin";
    }
  }
  refreshEmployeeList() {
    this.service.getEmployeeList().subscribe(data=>{
      this.EmployeeList = data;
      if (this.EmployeeList.length === 0) this.buttonDisabled = false;
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
