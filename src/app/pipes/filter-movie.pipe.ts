import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovie'
})
export class FilterMoviePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
