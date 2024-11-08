import { Component, Input } from '@angular/core';

@Component({
  selector: 'room-description-section',
  standalone: true,
  imports: [],
  templateUrl: './room-description-section.component.html',
  styles: ``
})
export class RoomDescriptionSectionComponent {
  @Input() description!: string;
  @Input() picture!: string;
  @Input() pictureAlt!: string;
}
