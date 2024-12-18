import { Component, Input } from '@angular/core';

@Component({
    selector: 'room-amenities-section',
    imports: [],
    templateUrl: './room-amenities-section.component.html',
    styles: ``
})
export class RoomAmenitiesSectionComponent {
  @Input() amenities!: string[];
}
