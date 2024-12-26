import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@shared/models/location';
import { HalfFractionPipe } from '@shared/pipes/half-fraction.pipe';
import { PluralizePipe } from '@shared/pipes/pluralize.pipe';
import { TruncatePipe } from '@shared/pipes/truncate.pipe';
import { LocationsService } from '@shared/services/locations.service';

@Component({
    selector: 'shared-basic-house-card',
    imports: [RouterModule, TruncatePipe, HalfFractionPipe, PluralizePipe],
    templateUrl: './basic-house-card.component.html',
    styles: ``
})
export class BasicHouseCardComponent implements OnInit {
  @Input() house!: Location;
  @Input() currentLang: string = 'es-MX';
  public hasPromotion: boolean = false;

  private locationsService = inject(LocationsService);

  ngOnInit(): void {
    this.hasPromotion = this.locationsService.hasPromotion(this.house.slug);
  }

}
