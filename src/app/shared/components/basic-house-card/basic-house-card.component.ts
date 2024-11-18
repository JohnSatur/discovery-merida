import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@shared/models/location';
import { HalfFractionPipe } from '@shared/pipes/half-fraction.pipe';
import { PluralizePipe } from '@shared/pipes/pluralize.pipe';
import { TruncatePipe } from '@shared/pipes/truncate.pipe';

@Component({
  selector: 'shared-basic-house-card',
  standalone: true,
  imports: [RouterModule, TruncatePipe, HalfFractionPipe, PluralizePipe],
  templateUrl: './basic-house-card.component.html',
  styles: ``
})
export class BasicHouseCardComponent {
  @Input() house!: Location;
  @Input() currentLang: string = 'es-MX';
}
