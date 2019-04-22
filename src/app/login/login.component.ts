import {Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit, OnDestroy,} from '@angular/core';
import { StudentsdataService } from '../services/studentsdata.service';
import { LoginCredentials } from '../../loginCredentials';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

declare var $;
declare var System: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredentials: LoginCredentials[] = [];
  public errorMsg: String;
  userName: String;
  password: string;
  public invalid: boolean;

  constructor(private studentDataService: StudentsdataService, private router: Router) { }

  ngOnInit() {
    this.studentDataService.getLoginCredentials()
      .subscribe(data => {  this.loginCredentials = data;
        console.log(this.loginCredentials);
    },
    error => {
      return this.errorMsg = error;
    });
    $('#loginModal').modal('show');
  }

  validateAdmin(userName: HTMLInputElement, password: HTMLInputElement) {
    //console.log("entered values are :");
    //console.log("userName " + userName.value);
    //console.log("password "  +  password.value);

    for (let i in this.loginCredentials) {
      //console.log(this.loginCredentials[i].userName); // "0", "1", "2",
      //console.log(this.loginCredentials[i].password);
      if(userName.value == this.loginCredentials[i].userName && password.value == this.loginCredentials[i].password) {
        console.log("matched");
        $('#loginModal').modal('hide');
        this.router.navigate(['/students'])
      } else {
        this.invalid=true;
      }

   }
  }

}
