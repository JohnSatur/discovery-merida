import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-language-toggle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss'
})
export class LanguageToggleComponent implements OnInit, OnDestroy {
  private langSubscription: Subscription | undefined;
  public isChecked: boolean = false;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.langSubscription = this.languageService.getCurrentLang().subscribe((lang: string) => {
      this.isChecked = (lang === 'en');
    });
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  public toggleLanguage(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    const newLang = isChecked ? 'en' : 'es-MX';
    this.languageService.changeLanguage(newLang);
  }
}
