import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { HomeTopHousesSectionComponent } from './components/home-top-houses-section/home-top-houses-section.component';
import { ReviewsSectionComponent } from '@components/reviews-section/reviews-section.component';
import { FaqSectionComponent } from '@components/faq-section/faq-section.component';
import { HomeContactSectionComponent } from './components/home-contact-section/home-contact-section.component';
import { Review } from '@shared/models/location.interfaces';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    
    HomeHeroSectionComponent,
    HomeTopHousesSectionComponent,
    ReviewsSectionComponent,
    FaqSectionComponent,
    HomeContactSectionComponent
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit, AfterViewInit {
  public topReviews: Review[] = [
    {
      username: 'Oscar',
      comment: 'Es un lugar perfectamente bien ubicado para llegar caminando a lugares como La Negrita, el paseo gastronómico o el Parque La Plancha. El lugar es lindo, limpio cómodo. Justo como en las fotos. Además, Mariana, La co-anfitriona, fue muy atenta y responsiva durante mi estancia. Un lugar que volvería a visitar sin duda.',
      rating: 5,
      profilePicture: 'img/profiles/oscar.jpg'
    },
    {
      username: 'Abhishek',
      comment: 'Nuestra estancia fue maravillosa. La casa tenía todas las comodidades que necesitábamos y estaba a poca distancia de los parques. ¡Altamente recomendado para familias!',
      rating: 5,
      profilePicture: 'img/profiles/abhishek.jpg'
    },
    {
      username: 'Kenna',
      comment: '¡Muy recomendable! Captura el ambiente de México y está a cuadras de excelentes restaurantes, lugares con música en vivo, etc.',
      rating: 5,
      profilePicture: 'img/profiles/kenna.jpg'
    }
  ];

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
