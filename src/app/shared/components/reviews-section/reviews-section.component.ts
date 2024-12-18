import { Component, Input } from '@angular/core';
import { Review } from '@shared/models/location';
import { ReviewCardComponent } from '../review-card/review-card.component';

@Component({
    selector: 'shared-reviews-section',
    imports: [ReviewCardComponent],
    templateUrl: './reviews-section.component.html',
    styles: ``
})
export class ReviewsSectionComponent {
  @Input() topReviews: Review[] = [];
}
