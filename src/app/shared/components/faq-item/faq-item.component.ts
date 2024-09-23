import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-faq-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss'
})
export class FaqItemComponent {
  @Input() question: string = '';
  @Input() answer: string = '';
  isExpanded = false;

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}
