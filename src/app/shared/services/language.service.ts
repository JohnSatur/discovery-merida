import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<string>(localStorage.getItem('preferedLanguage')  || 'es-MX');

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Método para obtener el idioma actual como observable.
   * @returns {Observable<string>} - Un observable que emite el código del idioma ("es-MX" para español y "en" para inglés).
   */
  public getCurrentLang(): Observable<string> {
    return this.currentLang.asObservable();
  }

  /**
   * Método para cambiar el idioma.
   * @param lang código de idioma que se quiere emitir.
   */
  public changeLanguage(lang: string) {
    // Cambiar el valor del idioma y guardarlo en localStorage
    this.currentLang.next(lang);
    localStorage.setItem('preferedLanguage', lang);

    // Obtener la Url actual y cambiar el parámetro de lenguaje
    const currentUrl = this.router.url;
    const segments = currentUrl.split('/');

    if (segments.length > 1)
      segments[1]=lang;

    // Redirigir a la nueva ruta
    this.router.navigate([segments.join('/')]);
  }

  /**
   * Método para obtener el idioma actual.
   * @returns {string} el idioma actual.
   */
  public getLang(): string {
    return this.currentLang.getValue();
  }
}
