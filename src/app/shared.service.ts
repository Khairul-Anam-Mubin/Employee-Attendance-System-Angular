import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000"


  constructor(private http:HttpClient) { }

  getEmployeeList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/showEmployee');
  }
  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/createAccount',val);
  }
  getAttendanceList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIUrl + '/monthlyReport', val);
  }
  getAttendanceCurrentMonthList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/monthlyReport');
  }
  addAttendance(val:any){
    return this.http.post(this.APIUrl + '/createAttendance',val);
  }
}
