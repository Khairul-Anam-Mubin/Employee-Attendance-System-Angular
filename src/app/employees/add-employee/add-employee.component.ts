import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service: SharedService) {  }
  
  @Input() employee:any;
  EmployeeId = "";
  EmployeeFirstName = "";
  EmployeeLastName = "";
  EmployeeDesignation = "";
  EmployeeAddress = "";
  EmployeePhoneNumber = "";
  EmployeeEmail = "";
  EmployeePin = "";
  
  ngOnInit(): void {
    this.EmployeeId = this.employee.EmployeeId;
    this.EmployeeFirstName = this.employee.EmployeeFirstName;
    this.EmployeeLastName = this.employee.EmployeeLastName;
    this.EmployeeDesignation = this.employee.EmployeeDesignation;
    this.EmployeeAddress = this.employee.EmployeeAddress;
    this.EmployeePhoneNumber = this.employee.EmployeePhoneNumber;
    this.EmployeeEmail = this.employee.EmployeeEmail;
    this.EmployeePin = this.employee.EmployeePin;
  }
  addEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeFirstName:this.EmployeeFirstName,
      EmployeeLastName: this.EmployeeLastName,
      EmployeeDesignation: this.EmployeeDesignation,
      EmployeeAddress: this.EmployeeAddress,
      EmployeePhoneNumber: this.EmployeePhoneNumber,
      EmployeeEmail:this.EmployeeEmail,
      EmployeePin : this.EmployeePin
    };
    this.service.addEmployee(val).subscribe(res=>{
      if (res === null) {
        alert("Check if employeeid, is valid!!");
      } else {
        alert("Sucessfull!");
      }
    });
  }
}
