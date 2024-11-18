import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomHeroSectionComponent } from './components/room-hero-section/room-hero-section.component';
import { RoomDescriptionSectionComponent } from './components/room-description-section/room-description-section.component';
import { RoomGallerySectionComponent } from './components/room-gallery-section/room-gallery-section.component';
import { RoomAmenitiesSectionComponent } from './components/room-amenities-section/room-amenities-section.component';
import { RoomMapSectionComponent } from './components/room-map-section/room-map-section.component';
import { ReviewsSectionComponent } from '@shared/components/reviews-section/reviews-section.component';
import { ContactSectionComponent } from '@shared/components/contact-section/contact-section.component';

import { LocationsService } from '@services/locations.service';
import { Location } from '@shared/models/location';

@Component({
  standalone: true,
  imports: [
    CommonModule,

    RoomHeroSectionComponent,
    RoomDescriptionSectionComponent,
    RoomGallerySectionComponent,
    RoomAmenitiesSectionComponent,
    RoomMapSectionComponent,
    ReviewsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './room.component.html',
  styles: ``
})
export class RoomComponent implements OnInit {
  public roomInfo?: Location; // Información de la casa que se está mostrando en el componente

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationsService
  ) { }
  
  /**
   * El método onInit obtiene el slug de la casa para traer la información de la misma del backend a través del servicio "Location Service"
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';

      this.locationService.getLocationBySlug(slug)
      .subscribe(location => {
        this.roomInfo = location;
      });
    });
  }

}
