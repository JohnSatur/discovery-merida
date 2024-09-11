import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating',
  standalone: true
})
export class StarRatingPipe implements PipeTransform {

  transform(value: number): string {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(value))
        stars += '<i class="ri-star-s-fill"></i>';
      else if (i === Math.floor(value) && value - Math.floor(value) >= 0.5)
        stars += '<i class="ri-star-half-s-fill"></i>';
      else
        stars += '<i class="ri-star-s-line"></i>';
    }
    return stars;
  }

}
