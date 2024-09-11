import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

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
}
