import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LocationsService } from '../../../../shared/services/locations.service';
import { Location } from '../../../../shared/models/location.interfaces';
import { TruncatePipe } from '../../../../shared/pipes/truncate.pipe';
import { PluralizePipe } from '../../../../shared/pipes/pluralize.pipe';
import { HalfFractionPipe } from '../../../../shared/pipes/half-fraction.pipe';
import { StarRatingPipe } from '../../../../shared/pipes/star-rating.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-top-houses-section',
  standalone: true,
  imports: [CommonModule, TruncatePipe, PluralizePipe, HalfFractionPipe, StarRatingPipe, RouterModule],
  templateUrl: './home-top-houses-section.component.html',
  styles: ``
})
export class HomeTopHousesSectionComponent implements OnInit {
  private locationsService = inject(LocationsService);
  private topHousesSlugs: string[] = [
    'casa-picasso',
    'suite-marian-ii',
    'departamento-oasis',
    'casa-dali',
  ];
  public topHouses: Location[] = [];

  ngOnInit(): void {
    this.locationsService.getLocationsBySlugs(this.topHousesSlugs, 'es-MX').subscribe(
      locations => this.topHouses = locations,
      error => console.error('Error al obtener las ubicaciones:', error)
    );
  }
}
