import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beatifyCal'
})
export class BeatifyCalPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string | number {
    return value <= 9 ? `0${value}` : value;
  }

}
