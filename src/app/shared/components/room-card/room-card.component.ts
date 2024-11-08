import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'shared-room-card',
  imports: [CommonModule],
  templateUrl: './room-card.component.html',
  styles: ``
})
export class RoomCardComponent {
  @Input() name: string = '';
  @Input() imgURL: string = '';
  @Input() stars: number = 0;
  @Input() reviews: number = 0;
  @Input() description: string = '';
  @Input() beds: number = 0;
  @Input() baths: number = 0;
  @Input() capacity: number = 0;

}
