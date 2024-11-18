import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ValueCardInfo } from '@shared/models/cards';


@Component({
  selector: 'shared-value-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './value-card.component.html',
  styles: ``
})
export class ValueCardComponent {
  @Input() cardInfo!: ValueCardInfo;
}
