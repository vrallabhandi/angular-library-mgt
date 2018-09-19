import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    console.log(value);
    return value.substr(0, limit) + ' ...';
  }

}
