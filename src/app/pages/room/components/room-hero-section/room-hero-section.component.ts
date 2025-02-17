import { Component, Input } from '@angular/core';

@Component({
    selector: 'room-hero-section',
    imports: [],
    templateUrl: './room-hero-section.component.html',
    styles: ``
})
export class RoomHeroSectionComponent {
  @Input() houseName!: string;
  @Input() coverPicture!: string;
  @Input() airbnbId!: string;
}
