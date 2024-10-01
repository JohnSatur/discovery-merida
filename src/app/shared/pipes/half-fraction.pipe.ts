import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'halfFraction',
  standalone: true
})
export class HalfFractionPipe implements PipeTransform {

  transform(value: number): string | number {
    const integer = Math.floor(value);
    const decimal = value - integer;

    if (decimal === 0.5)
      return `${integer} ½`;

    return value;
  }

}
