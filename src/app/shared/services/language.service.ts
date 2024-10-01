import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private baseAPIUrl = environments.baseAPIUrl;
  private currentLang = new BehaviorSubject<string>('es-MX');

  constructor(private http: HttpClient) { }

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
  }

  /**
   * Método para obtener el idioma actual.
   * @returns {string} el idioma actual.
   */
  public getLang(): string {
    return this.currentLang.getValue();
  }
}
