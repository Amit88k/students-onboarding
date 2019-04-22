import { Component, OnInit } from '@angular/core';
import { StudentsdataService } from '../services/studentsdata.service';
import { Student } from '../../student';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import {_if} from 'rxjs/observable/if';

declare var $;
declare var System: any;

let id: string;

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private studentDataService: StudentsdataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log((this.route.snapshot.params['id']));
    console.log(typeof (this.route.snapshot.params['id']));
    id = this.route.snapshot.params['id'];
    $('#deleteStudentRecordModal').modal('show');
  }
  
  deleteRecord() {
      this.studentDataService.studentRecordDeletion(id)
        .subscribe(() => this.router.navigate(['/homepage']) );
        $('#deleteStudentRecordModal').modal('hide');
      this.router.navigate(['/homepage']);
    }

    doNotDeleteRecord() {
      $('#deleteStudentRecordModal').modal('hide');
      this.router.navigate(['/homepage']);
    }

}

