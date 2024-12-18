import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-promo-modal',
  imports: [CommonModule],
  templateUrl: './promo-modal.component.html',
  styles: ``
})
export class PromoModalComponent {
  showModal = true;

  closeModal() {
    this.showModal = false;
    console.log(this.showModal);
  }
}
