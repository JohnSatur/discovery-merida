import { Component, Input } from '@angular/core';
import { Review } from '@shared/models/location';
import { StarRatingPipe } from '@shared/pipes/star-rating.pipe';

@Component({
  selector: 'shared-review-card',
  standalone: true,
  imports: [StarRatingPipe],
  templateUrl: './review-card.component.html',
  styles: ``
})
export class ReviewCardComponent {
  @Input() review!: Review;
}
