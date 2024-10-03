import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { environments } from '../../../environments/environment';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  public baseUrl: string = environments.baseUrl;
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
