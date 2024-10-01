import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-logo-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-loader.component.html',
  styleUrl: './logo-loader.component.scss'
})
export class LogoLoaderComponent implements OnInit {
  
  ngOnInit(): void {
    gsap.fromTo('.logo',
      { opacity: 0, },
      { opacity: 1, duration: 1.5, ease: "power2.out" });
  }
}
