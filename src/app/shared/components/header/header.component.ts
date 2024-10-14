import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';

/**
 * Componente para el encabezado de la aplicación. Incluye el menú principal y el componente para cambiar el idioma.
 */
@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LanguageToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  // Controla la visibilidad del menú en dispositivos móviles
  @HostBinding('class.translate-x-full') showMenu: boolean = true;

  // Referencia local a todo el encabezado 
  @ViewChild('header') header!: ElementRef;

  /**
   * Registra el plugin de ScrollTrigger de GSAP para utilizar animaciones basadas en el scroll
   */
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  /**
   * Configura las animaciones del scroll del color de fondo y opacidad cuando se llega a cierto scroll
   */
  ngAfterViewInit(): void {
    const header = this.header.nativeElement;
    // const headerHeight = header.offsetHeight;

    gsap.to(header, {
      scrollTrigger: {
        start: '400px top',
        end: '5e00px',
        scrub: true,
        onEnter: () => {
          gsap.to(header, { backgroundColor: '#0e7490', opacity: '0.85', duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(header, { backgroundColor: 'transparent', duration: 0.3 });
        }
      }
    });
  }

  // Alterna la visibilidad del menú de navegación de dispositivos móviles
  public toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }
}