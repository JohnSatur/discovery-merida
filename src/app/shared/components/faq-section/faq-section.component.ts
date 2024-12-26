import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqItemComponent } from '@components/faq-item/faq-item.component';

@Component({
    selector: 'shared-faq-section',
    imports: [CommonModule, FaqItemComponent],
    templateUrl: './faq-section.component.html',
    styles: ``
})
export class FaqSectionComponent {
  public faqs = [
    { question: '¿Cómo puedo hacer una reserva?', answer: 'Solo haz click en la casa de tu preferencia y te llevará a nuestro vínculo de Airbnb para que consultes disponibilidad y precio.' },
    { question: '¿Cuál es la política de cancelación?', answer: 'Nuestra política de cancelación es moderada, por lo que puedes cancelar sin penalización hasta 5 días antes de tu llegada.' },
    { question: '¿Cuáles son las formas de pago aceptadas?', answer: 'Las formas de pago son tarjeta de crédito en la plataforma de Airbnb.' },
    // { question: '¿Cómo puedo contactar al anfitrión?', answer: '...' },
    // { question: '¿Qué pasa si tengo algún problema durante mi estancia?', answer: '...' },
  ];
}
