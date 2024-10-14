import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Muestra una tarjeta desplegable de las preguntas frecuentes (FAQ)
 */
@Component({
  selector: 'shared-faq-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss'
})
export class FaqItemComponent {
  // Pregunta y respuesta que se muestran en la tarjeta proporcionados por el padre
  @Input() question: string = '';
  @Input() answer: string = '';

  // Controla si la tarjeta está expandida o colapsada
  isExpanded: boolean = false;

  /**
   * Método que alterna el estado de expansión de la respuesta
   */
  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
}
