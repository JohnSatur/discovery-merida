import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RoomCardComponent } from '../../shared/components/room-card/room-card.component';
import { LocationsService } from '../../shared/services/locations.service';
import { Location } from '../../shared/models/location.interface';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { PluralizePipe } from '../../shared/pipes/pluralize.pipe';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RoomCardComponent, TruncatePipe, PluralizePipe, RouterModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  public locations: Location[] = [];

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getLocations()
    .subscribe(locations => {
      this.locations = locations;
    });
  }

}
