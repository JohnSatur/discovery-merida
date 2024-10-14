import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environments } from '../../../environments/environment';
import { HomeInfoRequest } from '../../pages/models/homeInfoRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private baseAPIUrl: string = environments.baseAPIUrl;
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
    const validLangs = ['es-MX', 'en'];

    if (!validLangs.includes(lang)) {
      console.error(`Idioma no soportado: ${ lang }`);
      return;
    }

    // Evitar redirigir si el idioma no ha cambiado
    if (this.getLang() === lang) return;

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

  public getPageContent(apiRoute: string, lang: string): Observable<HomeInfoRequest> {
    const locale = lang === 'es-MX' ? 'es-MX' : 'en';
    const url = `${ this.baseAPIUrl }/${ apiRoute }?locale=${ locale }`;

    return this.http.get<HomeInfoRequest>(url);
  }
}
