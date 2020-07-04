import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NamefilterPipe implements PipeTransform {

  transform(value: any, sname: string): any {
    console.log(value)
    console.log(sname);
    if(sname===""){
      return value;
    }
    const users : any[] = [];
    for(let i=0;i<value.length; i++){
      console.log(value[i].name);
      let name : string = value[i].name;
      if(name.startsWith(sname)){
        users.push(value[i]);
      }
    }
    return users;;
  }

}
