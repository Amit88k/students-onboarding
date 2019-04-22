import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

const header = {headers: new Headers({'Content-Type': 'application/json'})}
const URL = 'http://localhost:3000/students';
const loginURL = 'http://localhost:3000/adminCredentials';

@Injectable()
export class StudentsdataService {

  constructor(private http: Http, private router: Router) { }

  getStudents() {
    return this.http.get(URL).map(res => res.json());
  }

  getLoginCredentials() {
    return this.http.get(loginURL).map(res => res.json());
  }

  postStudentData(data) {
    return this.http.post(URL, data, header).map(res => res.json());
  }

  studentRecordDeletion(blogID){
    console.log(URL + '/' + blogID);
     return this.http.delete(URL + '/' + blogID)
                 .map(res => null);

    //this.router.navigate(["/home"]);
  }

  getStudentById(studentId) {
    return (this.http.get(URL + '/' + studentId))
               .map(res => res.json());
  }

  editStudentData(tempstudentData) {
    return this.http.put(URL + '/' + tempstudentData.id, tempstudentData )
                   .map(res => res.json());
  }
}
