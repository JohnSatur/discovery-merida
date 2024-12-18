import { Component, Input } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
    selector: 'shared-contact-section',
    imports: [ContactFormComponent],
    templateUrl: './contact-section.component.html',
    styles: ``
})
export class ContactSectionComponent {
  @Input() coverPicture!: string;
}
