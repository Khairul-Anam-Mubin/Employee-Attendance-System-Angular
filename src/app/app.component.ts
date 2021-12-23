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
  employee:any;
  divHidden = true;
  LogInDivHidden = false;
  ActivateAddAdmin:boolean = false;
  AdminId:any;
  AdminPin:any;
  ngOnInit(): void {
    this.buttonDisabled = true; 
    this.refreshEmployeeList();
    this.AdminId = "";
    this.AdminPin = "";
    if (this.buttonDisabled === false) {
      this.buttonName = "Create Admin";
    }
  }
  LogIn() {
    if (this.AdminId === "" || this.AdminPin === "") {
      alert("Enter Id and Pin");
      return ;
    } else {
      for (let data of this.EmployeeList) {
        if (data["EmployeeId"].toString() === this.AdminId.toString() && data['EmployeePin'].toString() === this.AdminPin.toString() && data["Role"].toString() === "admin") {
          this.LogInDivHidden = true;
          return;
        }
        alert(data["EmployeeId"]);
      }
      alert("check your id and pin");
    }
  }
  LogOut() {
    this.LogInDivHidden = false;
    this.AdminId = "";
    this.AdminPin = "";
  }
  refreshEmployeeList() {
    this.service.getEmployeeList().subscribe(data=>{
      this.EmployeeList = data;
      if (this.EmployeeList.length === 0) {
        this.buttonDisabled = false;
        this.LogInDivHidden = true;
      } else {
        this.LogInDivHidden = false;
      }
    });
  }
  ActivateAddAttendanceCom:boolean = false;
  attendance:any;
  addClick(){
    this.attendance={
      EmployeeId:"",
      SuiteNumber:"",
      Status:"",
      EmployeePin:""
    }
    this.ActivateAddAttendanceCom = true;
  }
  closeClick() {
    this.ActivateAddAttendanceCom= false;
  }
  addClickAdmin(){
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
    this.ActivateAddAdmin = true;
  }
  closeClickAdmin() {
    this.ActivateAddAdmin= false;
    this.refreshEmployeeList();
  }
}
