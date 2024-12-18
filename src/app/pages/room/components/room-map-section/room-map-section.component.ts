import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'room-map-section',
    imports: [],
    templateUrl: './room-map-section.component.html',
    styles: ``
})
export class RoomMapSectionComponent implements OnInit {
  @Input() avgCoords!: string;
  public safeMapUrl?: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.setMapUrl(this.avgCoords);
  }

  public setMapUrl(googleMapsUrl: string): void {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(googleMapsUrl);
  }
}
