import { Component } from '@angular/core';
import { ValueCardComponent } from '@shared/components/value-card/value-card.component';
import { ValueCardInfo } from '@shared/models/cards';

@Component({
  selector: 'about-values-section',
  standalone: true,
  imports: [
    ValueCardComponent
  ],
  templateUrl: './about-values-section.component.html',
  styles: ``
})
export class AboutValuesSectionComponent {
  public values: ValueCardInfo[] = [
    { title: 'Confianza', description: 'Construimos relaciones sólidas basadas en la transparencia y la honestidad con nuestros huéspedes y propietarios.', iconClass: 'ri-shield-check-line' },
    { title: 'Excelencia', description: 'Nos esforzamos por superar las expectativas en cada aspecto de nuestro servicio, desde la limpieza hasta la atención al cliente.', iconClass: 'ri-star-line' },
    { title: 'Innovación', description: 'Buscamos constantemente nuevas formas de mejorar la experiencia de alojamiento, incorporando tecnología y tendencias actuales.', iconClass: 'ri-lightbulb-line' },
    { title: 'Sostenibilidad', description: 'Nos comprometemos a operar de manera responsable con el medio ambiente y fomentar prácticas sostenibles en nuestras propiedades.', iconClass: 'ri-leaf-line' },
    { title: 'Comunidad', description: 'Valoramos y apoyamos a las comunidades locales donde operamos, promoviendo el turismo responsable y el crecimiento económico.', iconClass: 'ri-team-line' },
    { title: 'Personalización', description: 'Ofrecemos experiencias únicas y personalizadas, adaptándonos a las necesidades y preferencias de cada huésped.', iconClass: 'ri-user-settings-line' },
  ];
}
