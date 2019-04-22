import { Component, OnInit } from '@angular/core';
import { StudentsdataService } from '../services/studentsdata.service';
import { Student } from '../../student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  allStudentsData: Student[] = [];
  public errorMsg: String;
  searchByName: String;
  searchByCategory: String;

  constructor(private studentDataService: StudentsdataService) { }

  ngOnInit(){
    this.studentDataService.getStudents()
      .subscribe(data => {  this.allStudentsData = data;
        console.log(this.allStudentsData[3]);
    },
    error => {
      return this.errorMsg = error;
    });
  }

  onDelete(obj) {
    console.log("id is " + obj.id);
    window.location.href = '/delete/' + obj.id ;
    // window.location.href = ''
  }

  onView(obj) {
    console.log("id is " + obj.id);
    window.location.href = '/view/' + obj.id;
    // window.location.href = ''
  }

  onEdit(obj) {
    console.log("id is " + obj.id);
    window.location.href = '/edit/' + obj.id;
    // window.location.href = ''
  }

}
