import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {

  constructor(private service: SharedService) {  }
  
  @Input() attendance:any;
  EmployeeId = "";
  SuiteNumber = "";
  Status = "";
  EmployeePin = "";
  
  ngOnInit(): void {
    this.EmployeeId = this.attendance.EmployeeId;
    this.SuiteNumber = this.attendance.SuiteNumber;
    this.Status = this.attendance.Status;
    this.EmployeePin = this.attendance.EmployeePin;
  }
  addAttendance() {
    var val = {
      EmployeeId : this.EmployeeId,
      SuiteNumber : this.SuiteNumber,
      Status : this.Status,
      EmployeePin : this.EmployeePin
    };
    this.service.addAttendance(val).subscribe(res=>{
      if (res === null) {
        alert("check your employeeid, suitnumber , pin and current entry status!");
      } else {
        alert("Successfull");
      }
    });
  }
}
