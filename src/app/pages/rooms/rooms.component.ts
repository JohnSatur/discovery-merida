import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RoomCardComponent } from '@components/room-card/room-card.component';
import { BasicHouseCardComponent } from '@shared/components/basic-house-card/basic-house-card.component';

import { Location } from '@shared/models/location';
import { TruncatePipe } from '@pipes/truncate.pipe';
import { PluralizePipe } from '@pipes/pluralize.pipe';
import { HalfFractionPipe } from '@pipes/half-fraction.pipe';
import { LocationsService } from '@services/locations.service';
import { LanguageService } from '@services/language.service';

@Component({
    imports: [
        CommonModule,
        RouterModule,
        BasicHouseCardComponent
    ],
    templateUrl: './rooms.component.html',
    styles: ``
})
export class RoomsComponent implements OnInit {
  public houses$: Observable<Location[]> = new Observable();
  public currentLang: string = 'es-MX';

  private languageService: LanguageService = inject(LanguageService);
  private locationsService: LocationsService = inject(LocationsService);

  ngOnInit(): void {
    this.languageService.getCurrentLang().subscribe(lang => {
      this.currentLang = lang;
    });
    this.houses$ = this.locationsService.getAllLocations(this.currentLang);
  }

}
