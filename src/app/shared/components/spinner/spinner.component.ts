import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { SpinnerService } from '@services/spinner.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'shared-spinner',
    imports: [CommonModule],
    templateUrl: './spinner.component.html',
    styles: ``
})
export class SpinnerComponent implements OnInit {
  @ViewChild('spinner', { static: true }) spinner!: ElementRef;
  private readonly spinnerService = inject(SpinnerService);
  isLoading = this.spinnerService.isLoading;
  
  ngOnInit(): void {
    this.animateSpinner();
  }

  public animateSpinner(): void {
    gsap.to(this.spinner.nativeElement, {
      rotation: 360,
      duration: 1,
      ease: 'none',
      repeat: -1,
    });

    gsap.to(this.spinner.nativeElement.querySelector('circle'), {
      strokeDasharray: '1 150',
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'power2.out',
      repeat: -1,
      yoyo: true,
    });
  }
}
