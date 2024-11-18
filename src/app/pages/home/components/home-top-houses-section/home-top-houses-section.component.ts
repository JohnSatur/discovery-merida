import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LocationsService } from '@services/locations.service';
import { Location } from '@shared/models/location';
import { RichHouseCardComponent } from '@shared/components/rich-house-card/rich-house-card.component';

@Component({
  selector: 'home-top-houses-section',
  standalone: true,
  imports: [
    CommonModule,
    RichHouseCardComponent
  ],
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
    this.locationsService.getLocationsBySlugs(this.topHousesSlugs, 'es-MX').subscribe({
      next: locations => this.topHouses = locations,
      error: error => console.error('Error al obtener las ubicaciones:', error)
    });
  }
}
