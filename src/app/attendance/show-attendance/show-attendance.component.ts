import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-attendance',
  templateUrl: './show-attendance.component.html',
  styleUrls: ['./show-attendance.component.css']
})
export class ShowAttendanceComponent implements OnInit {

  constructor(private service: SharedService) { }
  AttendanceList:any=[];
  ActivateAddAttendanceCom:boolean = false;
  attendance:any;
  Month:any;
  Year:any;
  whichMonth:any;
  ngOnInit(): void {
    this.refreshAttendanceList();
  }
  
  refreshAttendanceList() {
    this.Year = "";
    this.Month = "";
    this.whichMonth = "Current "
    this.service.getAttendanceCurrentMonthList().subscribe(data=>{
      this.AttendanceList = data;
    });
  }
  getKeys(obj: any): Array<string> {
    return Object.keys(obj);
  }
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
    this.refreshAttendanceList();
  }
  Filter() {
    if (this.Year === "" && this.Month === "") {
      alert("You have to select Years and Month.");
    } else if (this.Year === "") {
      alert("You have to select Years.");
    } else if (this.Month === "") {
      alert("You have to select Month.");
    } else if (this.Year.match(/^[0-9]+$/) === null) {
      alert("Year should have only digits.");
    } else if (this.Year.length != 4 || this.Year.charAt(0) == '0') {
      alert("Enter a valid year.");
    } else {
      var val = {
        Year : this.Year,
        Month : this.Month
      };
      this.service.getAttendanceList(val).subscribe(res=>{
        if (res === null) {
          alert("No Data!");
        } else {
          this.whichMonth = this.Month + " - " + this.Year;
          this.AttendanceList = res;
          //alert(res);
        }
      });
    }
  }
}
