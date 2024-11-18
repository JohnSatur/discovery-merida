import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { AboutHeroSectionComponent } from './components/about-hero-section/about-hero-section.component';
import { AboutIntroSectionComponent } from './components/about-intro-section/about-intro-section.component';
import { AboutTopHousesSectionComponent } from './components/about-top-houses-section/about-top-houses-section.component';
import { AboutValuesSectionComponent } from './components/about-values-section/about-values-section.component';
import { ContactSectionComponent } from '@shared/components/contact-section/contact-section.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    
    AboutHeroSectionComponent,
    AboutIntroSectionComponent,
    AboutTopHousesSectionComponent,
    AboutValuesSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent implements OnInit {
  public language: string | null = '';
  private route = inject(ActivatedRoute);
  
  constructor(private el: ElementRef) {
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

}
