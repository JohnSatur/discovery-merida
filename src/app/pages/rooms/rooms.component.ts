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

@Component({
  standalone: true,
  imports: [CommonModule, RoomCardComponent, TruncatePipe, PluralizePipe, HalfFractionPipe, RouterModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  public locations$: Observable<Location[]> = new Observable();
  public currentLang: string = 'es-MX';

  private languageService: LanguageService = inject(LanguageService);
  private locationsService: LocationsService = inject(LocationsService);

  ngOnInit(): void {
    this.languageService.getCurrentLang().subscribe(lang => {
      this.currentLang = lang;
    });
    this.locations$ = this.locationsService.getAllLocations(this.currentLang);
  }

  // Método para validar si la URL es relativa
  isRelativeUrl(url: string | undefined): boolean {
    return url ? url.startsWith('/') : false;
  }
}
