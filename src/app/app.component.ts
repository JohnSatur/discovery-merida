import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SocialMediaFloatComponent } from './shared/components/social-media-float/social-media-float.component';
import { LanguageService } from './shared/services/language.service';
import { LocationsService } from './shared/services/locations.service';
import { Observable, timer } from 'rxjs';
import { Location } from './shared/models/location.interfaces';
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
  // public locations$: Observable<Location[]> = new Observable();
  public isLoading: boolean = true;
  public is404: boolean = false;
  private isTimerStarted: boolean = false;


  constructor( private languageService: LanguageService, private locationsService: LocationsService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        this.is404 = this.router.url === '/404';

        if (!this.is404 && !this.isTimerStarted) {
          this.isTimerStarted = true;
          this.startLoadingTimer();
        }

        if (this.is404)
          this.isLoading = false;
      }
    });
  }

  ngOnInit(): void { 
  // TODO: Definir qué información dinámica quiero que se traduzca
    // const savedLang = localStorage.getItem('preferedLanguage') || 'es-MX';
    // this.languageService.changeLanguage(savedLang);

    // this.languageService.getCurrentLang().subscribe(lang => {
    //   this.currentLang = lang;

    //   this.locations$ = this.locationsService.getLocations(this.currentLang);
    // });

    // this.locations$ = this.locationsService.getLocations(this.currentLang);
  }

  // TODO: Definir qué información dinámica quiero que se traduzca

  public switchLanguage(lang: string): void {
    // this.languageService.changeLanguage(lang);
  }

  public startLoadingTimer(): void {
    timer(4000).subscribe(() => {
      this.isLoading = false;
    });
  }
}
