import { Component, inject } from '@angular/core';
import { LocationsService } from '@shared/services/locations.service';
import { Location } from '@models/location.interfaces';
import { BasicHouseCardComponent } from '@shared/components/basic-house-card/basic-house-card.component';


@Component({
  selector: 'about-top-houses-section',
  standalone: true,
  imports: [BasicHouseCardComponent],
  templateUrl: './about-top-houses-section.component.html',
  styles: ``
})
export class AboutTopHousesSectionComponent {
  private locationsService = inject(LocationsService);
  private topHousesSlugs: string[] = [
    'casa-yum-ha',
    'casa-linda',
    'loft-kitanche',
  ];
  public topHouses: Location[] = [];

  ngOnInit(): void {
    this.locationsService.getLocationsBySlugs(this.topHousesSlugs, 'es-MX').subscribe({
      next: locations => this.topHouses = locations,
      error: error => console.error('Error al obtener las ubicaciones:', error)
    });
  }
}
