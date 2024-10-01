import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SocialMediaFloatComponent } from './shared/components/social-media-float/social-media-float.component';
import { LanguageService } from './shared/services/language.service';
import { LocationsService } from './shared/services/locations.service';
import { Observable } from 'rxjs';
import { Location } from './shared/models/location.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, SocialMediaFloatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'discovery-merida';
  public currentLang: string = 'es-MX'; // Idioma por defecto
  public locations$: Observable<Location[]> = new Observable();


  constructor( private languageService: LanguageService,
    private locationsService: LocationsService ) { }

  ngOnInit(): void {
    const savedLang = localStorage.getItem('preferedLanguage') || 'es-MX';
    this.languageService.changeLanguage(savedLang);

    this.languageService.getCurrentLang().subscribe(lang => {
      this.currentLang = lang;

      this.locations$ = this.locationsService.getLocations(this.currentLang);
    });

    this.locations$ = this.locationsService.getLocations(this.currentLang);
  }

  public switchLanguage(lang: string): void {
    this.languageService.changeLanguage(lang);
  }
}
