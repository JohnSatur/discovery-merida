import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, timer } from 'rxjs';

import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { DisclaimerBannerComponent } from '@components/disclaimer-banner/disclaimer-banner.component';

import { LanguageService } from '@services/language.service';
import { PromoModalComponent } from '@shared/components/promo-modal/promo-modal.component';

@Component({
    selector: 'app-root',
    imports: [
      CommonModule,
      RouterOutlet,
      HeaderComponent,
      FooterComponent,
      DisclaimerBannerComponent,
      PromoModalComponent,
    ],
    templateUrl: './app.component.html',
    styles: ``
})
export class AppComponent implements OnInit {
  public title = 'discovery-merida';
  public isLoading: boolean = true;
  public is404: boolean = false;
  private isTimerStarted: boolean = false;
  public currentUrl$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private router = inject(Router);

  /**
   * El constructor suscribe a los eventos de enrutamiento para detectar cambios de URL y gestionar la carga de contenido y el cambio de idioma.
   * 
   * @param languageService Servicio centralizado para gestionar el idioma
   * @param router Angular Router
   */
  constructor( private languageService: LanguageService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl$.next(event.url);
        this.is404 = event.url === '/404';

        if (!this.is404 && !this.isTimerStarted) {
          this.isTimerStarted = true;
          this.startLoadingTimer();
        }

        if (this.is404)
          this.isLoading = false;
        else
        this.updateLanguageBasedOnUrl(event.url);
      }
    });
  }

  ngOnInit(): void { }

  /**
   * Actualiza el idioma de la aplicación basándose en la URL actual. Solo hace el cambio si es necesario.
   * 
   * @param url La URL actual de la aplicación
   */
  private updateLanguageBasedOnUrl(url: string): void {
    if (url) {
      const validLangs = ['es-MX', 'en'];
      const langFromUrl = url.split('/')[1];
      const langToSet = validLangs.includes(langFromUrl) ? langFromUrl : 'es-MX';
      const currentLang = localStorage.getItem('preferedLanguage') || 'es-MX';

      if (langToSet !== currentLang)
        this.languageService.changeLanguage(langToSet);
    }
  }

  /**
   * Método temporal para simular la carga de la aplicación (4 segundos)
   */
  public startLoadingTimer(): void {
    timer(4000).subscribe(() => {
      this.isLoading = false;
    });
  }
}
