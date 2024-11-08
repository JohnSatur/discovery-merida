import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RoomCardComponent } from '@components/room-card/room-card.component';
import { LocationsService } from '@services/locations.service';
import { Location } from '@models/location.interfaces';
import { TruncatePipe } from '@pipes/truncate.pipe';
import { PluralizePipe } from '@pipes/pluralize.pipe';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { HalfFractionPipe } from '@pipes/half-fraction.pipe';
import { LanguageService } from '@services/language.service';
import { BasicHouseCardComponent } from '@shared/components/basic-house-card/basic-house-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, RoomCardComponent, TruncatePipe, PluralizePipe, HalfFractionPipe, RouterModule, BasicHouseCardComponent],
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
