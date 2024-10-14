import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

/**
 * Componente del interruptor para cambiar de idioma en el menú principal
 */
@Component({
  selector: 'shared-language-toggle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss'
})
export class LanguageToggleComponent implements OnInit, OnDestroy {
  // Suscripción al observable del isioma actual
  private langSubscription: Subscription | undefined;

  // Estado del interruptor (true para inglés)
  public isChecked: boolean = false;

  /**
   * Constructor del componente.
   * @param languageService Servicio para manejar el idioma de la aplicación
   */
  constructor(private languageService: LanguageService) { }

  /**
   * onInit se suscribe al observable del isioma para actualizar el estado del interruptor.
   */
  ngOnInit(): void {
    this.langSubscription = this.languageService.getCurrentLang().subscribe((lang: string) => {
      this.isChecked = (lang === 'en');
    });
  }

  /**
   * onDestroy cancela la suscripción al observable para evitar fugas de memoria
   */
  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  /**
   * Método que se ejecuta al cambiar el estado de un interruptor
   * 
   * @param event Evento de cambio. Contiene el nuevo estado del input
   */
  public toggleLanguage(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked; // Estado actual del interruptor
    const newLang = isChecked ? 'en' : 'es-MX';
    this.languageService.changeLanguage(newLang);
  }
}
