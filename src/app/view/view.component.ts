import { Component, OnInit } from '@angular/core';
import { StudentsdataService } from '../services/studentsdata.service';
import { Student } from '../../student';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

declare var $;
declare var System: any;


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public errorMsg: String;
  studentId: number;
  viewStudent: Student;

  constructor(private studentDataService: StudentsdataService,  private router: Router, private route: ActivatedRoute) { }

  isDomicileChecked: boolean;
  isbirthCertificateChecked: boolean;
  ismarksheetsChecked: boolean;
  ispoliceClearanceChecked: boolean;
  ispassportChecked: boolean;
  isdeclarationChecked: boolean;


  ngOnInit() {
    this.studentId = this.route.snapshot.params['id'];

    this.studentDataService.getStudentById(this.studentId)
    .subscribe((student: Student) => {
                 this.viewStudent = student;
                  this.isDomicileChecked = this.viewStudent.domicile;
                  this.isbirthCertificateChecked = this.viewStudent.birthCertificate;
                  this.ismarksheetsChecked = this.viewStudent.marksheets;
                  this.ispoliceClearanceChecked = this.viewStudent.policeClearance;
                  this.ispassportChecked = this.viewStudent.passport;
                  this.isdeclarationChecked = this.viewStudent.declaration; 
           }
      ) ;

    console.log(this.isDomicileChecked + " " + this.isbirthCertificateChecked + " " + this.isdeclarationChecked);
      $('#viewModal').modal('show');
  }

  onClose() {
    $('#viewModal').modal('hide');
    this.router.navigate(['/homepage']) 
  }

}
