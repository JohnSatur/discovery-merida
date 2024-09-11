import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  @HostBinding('class.translate-x-full') showMenu: boolean = true;
  @ViewChild('header') header!: ElementRef;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    const header = this.header.nativeElement;
    // const headerHeight = header.offsetHeight;

    gsap.to(header, {
      scrollTrigger: {
        start: '400px top',
        end: '500px',
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

  public toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }
}