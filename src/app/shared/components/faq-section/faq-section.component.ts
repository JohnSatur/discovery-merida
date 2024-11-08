import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqItemComponent } from '@components/faq-item/faq-item.component';

@Component({
  selector: 'shared-faq-section',
  standalone: true,
  imports: [CommonModule, FaqItemComponent],
  templateUrl: './faq-section.component.html',
  styles: ``
})
export class FaqSectionComponent {
  public faqs = [
    { question: '¿Cómo puedo hacer una reserva?', answer: '...' },
    { question: '¿Cuál es la política de cancelación?', answer: '...' },
    { question: '¿Cuáles son las formas de pago aceptadas?', answer: '...' },
    { question: '¿Cómo puedo contactar al anfitrión?', answer: '...' },
    { question: '¿Qué pasa si tengo algún problema durante mi estancia?', answer: '...' },
  ];
}
