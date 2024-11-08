import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

/**
 * Componente encargado de mostrar el baner de aceptación de cookies y política de privacidad
 */
@Component({
  selector: 'shared-disclaimer-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disclaimer-banner.component.html',
  styles: ``
})
export class DisclaimerBannerComponent implements OnInit {
  public showBanner = false;

  /**
   * Verifica si el usuario ya ha aceptado las cookies y aviso de privacidad dando click en la "X" del banner. Solo se mostrará si el usuario no ha aceptado las políticas.
   */
  ngOnInit(): void {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (!cookiesAccepted)
      this.showBanner = true;
  }

  /**
   * Método para aceptar las cookies cuando el usuario haga click en la "X" del banner.
   * 
   * Guarda la preferencia en LocalStorage.
   */
  public acceptCookies() {
    this.showBanner = false;
    localStorage.setItem('cookiesAccepted', 'true');
  }
}
