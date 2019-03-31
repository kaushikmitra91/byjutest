import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'childSubject'
})
export class ChildSubjectPipe implements PipeTransform {

  transform(value: any[], searchArgs: string): any[] {
    if (!value) {
      return [];
    }
    if (!searchArgs) {
      return value;
    }
    searchArgs = searchArgs.toLowerCase();
    return value.filter(obj => {
      return obj['Child Subject'].toLowerCase().includes(searchArgs);
    });
  }

}
