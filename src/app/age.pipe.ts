import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    let currentDate = new Date();
    console.log("Current date "+currentDate);
    let currentYear = currentDate.getUTCFullYear();
    let birthDate = new Date(value);
    console.log("DATE of Birth "+birthDate)
    let birthYear = birthDate.getUTCFullYear();
    console.log(currentYear);
    console.log(birthYear);
    return currentYear-birthYear;;
  }

}
