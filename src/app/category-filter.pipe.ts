import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../student';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(students: Student[], searchByCategory: string): Student[] {
    if(!students || ! searchByCategory) {
      return students;
    }
      
    return students.filter(student => 
      student.category.toLowerCase().indexOf(searchByCategory.toLowerCase()) !== -1);
  }

}
