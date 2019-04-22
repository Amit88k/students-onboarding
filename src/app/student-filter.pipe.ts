import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../student';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  transform(students: Student[], searchByName: string): Student[] {
    if(!students || ! searchByName) {
      return students;
    }
      
    return students.filter(student => 
      student.studentName.toLowerCase().indexOf(searchByName.toLowerCase()) !== -1);
  }

}
