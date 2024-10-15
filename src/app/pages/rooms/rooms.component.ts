import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RoomCardComponent } from '../../shared/components/room-card/room-card.component';
import { LocationsService } from '../../shared/services/locations.service';
import { Location } from '../../shared/models/location.interfaces';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { PluralizePipe } from '../../shared/pipes/pluralize.pipe';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environment';
import { HalfFractionPipe } from '../../shared/pipes/half-fraction.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, RoomCardComponent, TruncatePipe, PluralizePipe, HalfFractionPipe, RouterModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  public locations$: Observable<Location[]> = new Observable();
  public baseMediaUrl: string = environments.baseMediaUrl;
  public currentLang: string = 'es-MX';

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locations$ = this.locationsService.getLocations(this.currentLang);
  }

  // Método para validar si la URL es relativa
  isRelativeUrl(url: string | undefined): boolean {
    return url ? url.startsWith('/') : false;
  }
}
