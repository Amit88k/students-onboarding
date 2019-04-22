import { Component, OnInit } from '@angular/core';
import { StudentsdataService } from '../services/studentsdata.service';
import { Student } from '../../student';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

declare var $;
declare var System: any;


@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {

  studentName: string;
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

  categorySelected: String = "";

  constructor(private studentDataService: StudentsdataService, private router: Router) { }

  items: Student[] = [];
  categories = ['International', 'Domestic'];
  ngOnInit() {
    $('#onboardingFormModal').modal('show');
  }

  callType(value){
    console.log(value);
    this.categorySelected=value;
  }

  // onboardStudent(studentName: HTMLInputElement, category: HTMLInputElement, domicile: HTMLInputElement, 
  //   birthCertificate: HTMLInputElement, marksheets: HTMLInputElement, policeClearance: HTMLInputElement, 
  //   passport: HTMLInputElement, declaration: HTMLInputElement, dob: HTMLInputElement, fatherName: HTMLInputElement, 
  //   motherName: HTMLInputElement, lastClassScore: HTMLInputElement) {

      onboardStudent(studentName, category, domicile, 
        birthCertificate, marksheets, policeClearance, 
        passport, declaration, dob, fatherName, 
        motherName, lastClassScore) {
    const studentData = {
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

    console.log(studentData.lastClassScore);
    console.log(studentData.dob);

    this.studentDataService.postStudentData(studentData)
      .subscribe(data => {
        this.items.push(studentData);
        $('#onboardingFormModal').modal('hide');
        this.router.navigate(['/homepage']);
      });
  }

  onClose(){
    $('#onboardingFormModal').modal('hide');
        this.router.navigate(['/homepage']);
  }

}
