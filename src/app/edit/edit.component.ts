import { Component, OnInit } from '@angular/core';
import { StudentsdataService } from '../services/studentsdata.service';
import { Student } from '../../student';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

declare var $;
declare var System: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  studentName: String;
  fatherName: string;
  motherName: string;
  dob: string;
  category: string;
  lastClassScore: string;
  // documents_submitted: Array<string>;
  birthCertificate: boolean = false;
  marksheets: boolean = false;
  policeClearance: boolean = false;
  passport: boolean = false;
  declaration: boolean = false;
  domicile: boolean = false;

  public errorMsg: String;
  studentId: number;
  viewStudent: Student;

  items: Student[] = [];
  studentOldData: any;
  oldData: Student[] = [];
  categories = ['International', 'Domestic'];
  constructor(private studentDataService: StudentsdataService,  private router: Router, private route: ActivatedRoute) { }

  isDomicileChecked: boolean;
  isbirthCertificateChecked: boolean;
  ismarksheetsChecked: boolean;
  ispoliceClearanceChecked: boolean;
  ispassportChecked: boolean;
  isdeclarationChecked: boolean;

  ngOnInit() {
    this.oldData = [];
    this.studentOldData = [];
    this.studentId = this.route.snapshot.params['id'];

    this.studentDataService.getStudentById(this.studentId)
    .subscribe((student: Student) => {
                 this.viewStudent = student;
                 this.studentOldData = student;
                 this.isDomicileChecked = this.viewStudent.domicile;
                 this.isbirthCertificateChecked = this.viewStudent.birthCertificate;
                 this.ismarksheetsChecked = this.viewStudent.marksheets;
                 this.ispoliceClearanceChecked = this.viewStudent.policeClearance;
                 this.ispassportChecked = this.viewStudent.passport;
                 this.isdeclarationChecked = this.viewStudent.declaration; 
                 this.studentName = this.viewStudent.studentName;
                 this.category = this.viewStudent.category;
                 this.domicile = this.viewStudent.domicile;
                 this.birthCertificate = this.viewStudent.birthCertificate;

           }
           
      ) ;

      console.log("inside ngOnInIt" + this.studentOldData);
      // console.log(this.studentOldData[0]);
      $('#editStudentRecordModal').modal('show');
  }

 

  // onEdit(studentName: HTMLInputElement, category: HTMLInputElement, domicile: HTMLInputElement, 
  //   birthCertificate: HTMLInputElement, marksheets: HTMLInputElement, policeClearance: HTMLInputElement, 
  //   passport: HTMLInputElement, declaration: HTMLInputElement, dob: HTMLInputElement, fatherName: HTMLInputElement, 
  //   motherName: HTMLInputElement, lastClassScore: HTMLInputElement) {

    onEdit(studentName, category, domicile, 
        birthCertificate, marksheets, policeClearance, 
        passport, declaration, dob, fatherName, 
        motherName, lastClassScore) {

    console.log(this.studentOldData);
    const tempstudentData = {
      id: this.studentId,
      studentName: String(studentName),
      category: String(category),
      domicile: Boolean(domicile),
      birthCertificate: Boolean(birthCertificate),
      marksheets: Boolean(marksheets),
      policeClearance: Boolean(policeClearance),
      passport: Boolean(passport),
      declaration: Boolean(declaration),
      dob: String(dob),
      fatherName: String(fatherName),
      motherName: String(motherName),
      lastClassScore: String(lastClassScore)
    }

    console.log(domicile);
    console.log(tempstudentData.studentName);
    console.log("dob type" + typeof(this.viewStudent.dob));
    console.log(this.viewStudent.lastClassScore);

    if(tempstudentData.studentName == 'undefined') {
      tempstudentData.studentName = String(this.viewStudent.studentName);
      console.log(tempstudentData.studentName);
    }
    if(tempstudentData.category == 'undefined') {
      tempstudentData.category = String(this.viewStudent.category);
    }
    if(tempstudentData.domicile == false) {
      tempstudentData.domicile = (this.viewStudent.domicile);
    }
    if(tempstudentData.birthCertificate == false) {
      tempstudentData.birthCertificate = (this.viewStudent.birthCertificate);
    }
    if(tempstudentData.marksheets == false) {
      tempstudentData.marksheets = (this.viewStudent.marksheets);
    }
    if(tempstudentData.policeClearance == false) {
      tempstudentData.policeClearance = (this.viewStudent.policeClearance);
    }
    if(tempstudentData.passport == false) {
      tempstudentData.passport = (this.viewStudent.passport);
    }
    if(tempstudentData.declaration == false) {
      tempstudentData.declaration = (this.viewStudent.declaration);
    }
    if(tempstudentData.dob == "undefined") {
      tempstudentData.dob =  String(this.viewStudent.dob);
      console.log(typeof(this.viewStudent.dob));
    }
    if(tempstudentData.fatherName == 'undefined') {
      tempstudentData.fatherName = String(this.viewStudent.fatherName);
    }
    if(tempstudentData.motherName == 'undefined') {
      tempstudentData.motherName = String(this.viewStudent.motherName);
    }
    if(tempstudentData.lastClassScore == 'undefined'){
      tempstudentData.lastClassScore = String(this.viewStudent.lastClassScore);
    }
    // if(tempstudentData.lastClassScore == null && tempstudentData.lastClassScore == undefined && typeof tempstudentData.lastClassScore == null) {
    //   tempstudentData.lastClassScore = (this.viewStudent.lastClassScore);
    //   console.log(typeof(this.viewStudent.dob));
    // }



    this.studentDataService.editStudentData(tempstudentData)
      .subscribe(data => {
        this.items.push(tempstudentData);
        $('#editStudentRecordModal').modal('hide');
        this.router.navigate(['/homepage']);
      });
  }

  onClose() {
    $('#editStudentRecordModal').modal('hide');
    this.router.navigate(['/homepage']);
  }
}  

