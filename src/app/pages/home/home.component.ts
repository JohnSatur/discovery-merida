import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaqItemComponent } from '../../shared/components/faq-item/faq-item.component';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  standalone: true,
  imports: [CommonModule, FaqItemComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

  public faqs = [
    { question: '¿Cómo puedo hacer una reserva?', answer: '...' },
    { question: '¿Cuál es la política de cancelación?', answer: '...' },
    { question: '¿Cuáles son las formas de pago aceptadas?', answer: '...' },
    { question: '¿Cómo puedo contactar al anfitrión?', answer: '...' },
    { question: '¿Qué pasa si tengo algún problema durante mi estancia?', answer: '...' },
  ];

  constructor (private el: ElementRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    // Ventana
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

  ngAfterViewInit(): void {
    const tl = gsap.timeline();
    const cards = this.el.nativeElement.querySelectorAll('.recomended__card');
    const reviews = this.el.nativeElement.querySelectorAll('.reviews__card');
    const galleryImg = this.el.nativeElement.querySelectorAll('.gallery__img');
    const faqCards = this.el.nativeElement.querySelectorAll('.faq__card');

    // Animaciones Hero
    tl.fromTo('.hero__title', { opacity: 0 }, { opacity: 1, duration: .5 });

    tl.fromTo('.hero__subtitle', { opacity: 0 }, { opacity: 1, duration: .5 });

    tl.fromTo('.hero__form', { y: '100%', opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });

    // Cards de casas
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

    // Reseñas
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

    // Galería de imágenes
    gsap.fromTo(galleryImg, {
      scale: 0.8,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out", // Easing para una animación más suave
      scrollTrigger: {
          trigger: galleryImg,
          start: 'top 80%',
          toggleActions: 'play none none none'
      }
    });

    // Preguntas frecuentes
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

  public hola() {
    console.log('hola');
  }
}

