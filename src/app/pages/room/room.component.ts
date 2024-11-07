import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from '../../shared/services/locations.service';
import { Location } from '../../shared/models/location.interfaces';
import { StarRatingPipe } from '../../shared/pipes/star-rating.pipe';
import { environments } from '../../../environments/environment';

@Component({
  standalone: true,
  imports: [CommonModule, StarRatingPipe],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent implements OnInit {
  public roomInfo?: Location; // Información de la casa que se está mostrando en el componente
  public baseMediaUrl: string = environments.baseMediaUrl;

  constructor( private route: ActivatedRoute, private locationService: LocationsService ) { }
  
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
