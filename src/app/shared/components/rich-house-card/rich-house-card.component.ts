import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Location } from '@shared/models/location';
import { HalfFractionPipe } from '@shared/pipes/half-fraction.pipe';
import { PluralizePipe } from '@shared/pipes/pluralize.pipe';
import { StarRatingPipe } from '@shared/pipes/star-rating.pipe';
import { TruncatePipe } from '@shared/pipes/truncate.pipe';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'shared-rich-house-card',
    imports: [
        CommonModule,
        RouterModule,
        StarRatingPipe,
        TruncatePipe,
        HalfFractionPipe,
        PluralizePipe
    ],
    templateUrl: './rich-house-card.component.html',
    styles: ``
})
export class RichHouseCardComponent {
  @Input() house!: Location;
}
