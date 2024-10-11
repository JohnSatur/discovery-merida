import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SocialMediaFloatComponent } from './shared/components/social-media-float/social-media-float.component';
import { LanguageService } from './shared/services/language.service';
import { LocationsService } from './shared/services/locations.service';
import { BehaviorSubject, timer } from 'rxjs';
import { LogoLoaderComponent } from './shared/components/logo-loader/logo-loader.component';
import { DisclaimerBannerComponent } from './shared/components/disclaimer-banner/disclaimer-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, SocialMediaFloatComponent, LogoLoaderComponent, DisclaimerBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'discovery-merida';
  public currentLang: string = 'es-MX'; // Idioma por defecto
  public isLoading: boolean = true;
  public is404: boolean = false;
  private isTimerStarted: boolean = false;
  public currentUrl$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor( private languageService: LanguageService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl$.next(event.url);
        this.is404 = event.url === '/404';

        if (!this.is404 && !this.isTimerStarted) {
          this.isTimerStarted = true;
          this.startLoadingTimer();
        }

        if (this.is404) this.isLoading = false;
      }
    });
  }

  ngOnInit(): void {
    const savedLang = localStorage.getItem('preferedLanguage') || 'es-MX';
    // TODO: Arreglar este método. Está haciendo que no pueda recargar la página desde el navegador sin regresar a la raiz :(
    // ! this.languageService.changeLanguage(savedLang);

    this.languageService.getCurrentLang().subscribe(lang => {
      this.currentLang = lang;
    });
  }

  public startLoadingTimer(): void {
    timer(4000).subscribe(() => {
      this.isLoading = false;
    });
  }
}
