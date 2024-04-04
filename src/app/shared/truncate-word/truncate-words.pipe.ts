import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateWords'
})
export class TruncateWordsPipe implements PipeTransform {

  transform(value: string, limit: number = 4, completeWords: boolean = false): string {
    
    if (value) {
      let words = value.split(' ');
      if (words.length > limit) {
        if (completeWords) {
          limit = words.slice(0, limit).join(' ').length;
          while (limit > value.length) {
            limit--;
          }
        }
        return words.slice(0, limit).join(' ') + '...';
      }
      return value;
    }
    return '';
  }
}
