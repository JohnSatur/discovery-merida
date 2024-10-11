import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-disclaimer-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disclaimer-banner.component.html',
  styleUrl: './disclaimer-banner.component.scss'
})
export class DisclaimerBannerComponent implements OnInit {
  public showBanner = false;

  ngOnInit(): void {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (!cookiesAccepted)
      this.showBanner = true;
  }

  public acceptCookies() {
    this.showBanner = false;
    localStorage.setItem('cookiesAccepted', 'true');
  }
}
