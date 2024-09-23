import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from '../../shared/services/locations.service';
import { Location } from '../../shared/models/location.interface';
import { map, tap } from 'rxjs';
import { StarRatingPipe } from '../../shared/pipes/star-rating.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, StarRatingPipe],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent implements OnInit {
  public roomInfo!: Location;

  constructor( private route: ActivatedRoute, private locationService: LocationsService ) { }
  
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