import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from '@services/locations.service';
import { Location } from '@models/location.interfaces';
import { StarRatingPipe } from '@pipes/star-rating.pipe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [CommonModule, StarRatingPipe],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent implements OnInit {
  public roomInfo?: Location; // Información de la casa que se está mostrando en el componente
  public safeMapUrl?: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationsService,
    private sanitizer: DomSanitizer) { }
  
  /**
   * El método onInit obtiene el slug de la casa para traer la información de la misma del backend a través del servicio "Location Service"
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';

      this.locationService.getLocationBySlug(slug)
      .subscribe(location => {
        this.roomInfo = location;
        this.setMapUrl(this.roomInfo.avgCoords);
      });
    });
  }

  public setMapUrl(googleMapsUrl: string): void {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(googleMapsUrl);
  }
}
