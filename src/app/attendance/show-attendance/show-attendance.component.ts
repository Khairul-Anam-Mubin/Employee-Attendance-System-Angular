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
  month:any;
  ngOnInit(): void {
    this.refreshAttendanceList();
  }
  
  refreshAttendanceList() {
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

}
