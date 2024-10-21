import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaqItemComponent } from '../../shared/components/faq-item/faq-item.component';
import { Observable } from 'rxjs';
import { Location } from '../../shared/models/location.interfaces';

@Component({
  standalone: true,
  imports: [CommonModule, FaqItemComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  private apiRoute: string = 'home-page';

  public faqs = [
    { question: '¿Cómo puedo hacer una reserva?', answer: '...' },
    { question: '¿Cuál es la política de cancelación?', answer: '...' },
    { question: '¿Cuáles son las formas de pago aceptadas?', answer: '...' },
    { question: '¿Cómo puedo contactar al anfitrión?', answer: '...' },
    { question: '¿Qué pasa si tengo algún problema durante mi estancia?', answer: '...' },
  ];
  public locations$: Observable<Location[]> = new Observable();

  constructor (private el: ElementRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    this.animatePage();
    // Obteniendo la información de la página en el idioma actual
    // TODO: Definir qué información dinámica quiero que se traduzca
    // this.languageService.getCurrentLang().subscribe(lang => {
      // this.languageService.getPageContent(this.apiRoute, lang).subscribe(homeInfo => {
      //   this.homeInfo = homeInfo.data.attributes;
      // });
    // });
  }

  ngAfterViewInit(): void {
    const cards = this.el.nativeElement.querySelectorAll('.recomended__card');
    const reviews = this.el.nativeElement.querySelectorAll('.reviews__card');
    const galleryImgs = this.el.nativeElement.querySelectorAll('.gallery__img');
    const faqCards = this.el.nativeElement.querySelectorAll('.faq__card');

    // Animaciones de entrada
    this.animateHero();
    this.animateRecommendedCards(cards);
    this.animateReviews(reviews);
    this.animateGalleryImgs(galleryImgs);
    this.animateFaqCards(faqCards);
    this.animateContactForm();
  }

  private animatePage() {
    gsap.fromTo(this.el.nativeElement, {
      opacity: 0,
      y: 50
    },{
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: this.el.nativeElement
      }
    });
  }

  private animateHero(): void {
    const tl = gsap.timeline();

    tl.fromTo('.hero__title', { opacity: 0 }, { opacity: 1, duration: .5 });
    tl.fromTo('.hero__subtitle', { opacity: 0 }, { opacity: 1, duration: .5 });
    tl.fromTo('.hero__form', { y: '100%', opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
  }

  private animateRecommendedCards(cards: Element[]): void {
    gsap.fromTo(cards, {
      y: '100%',
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: cards,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }

  private animateReviews(reviews: Element[]): void {
    gsap.fromTo(reviews, {
      scale: 0.8,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out", // Easing para una animación más suave
      scrollTrigger: {
          trigger: reviews,
          start: 'top 80%',
          toggleActions: 'play none none none'
      }
    });
  }

  private animateGalleryImgs(galleryImgs: Element[]): void {
    gsap.fromTo(galleryImgs, {
      scale: 0.8,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out", // Easing para una animación más suave
      scrollTrigger: {
          trigger: galleryImgs,
          start: 'top 80%',
          toggleActions: 'play none none none'
      }
    });
  }

  private animateFaqCards(faqCards: Element[]): void {
    gsap.fromTo(faqCards, {
      scale: 0.8,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out", // Easing para una animación más suave
      scrollTrigger: {
        trigger: faqCards,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }

  private animateContactForm(): void {
    // Formulario de contacto
    gsap.from('.contact', {
      scrollTrigger: {
        trigger: '.contact',
        start: 'top bottom',
        end: 'top 50%',
        scrub: 1
      },
      opacity: 0,
      y: 50,
      duration: 1
    });
  }
}
