import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location, StrapiResponse } from '../models/location.interface';
import { environments } from '../../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LocationsService {
    private baseAPIUrl: string = environments.baseAPIUrl;
    private baseUrl: string = environments.baseUrl;

    constructor( private http: HttpClient ) { }
    
    public getLocations(): Observable<Location[]> {
        return this.http.get<StrapiResponse>(`${ this.baseAPIUrl }/locations?populate=photos,amenities,reviews.profilePicture`)
        .pipe(
            map( response => response.data)
        );
    }

    public getLocationBySlug(slug: string): Observable<Location> {
        return this.http.get<StrapiResponse>(`${ this.baseAPIUrl }/locations?populate=photos,amenities,reviews.profilePicture&filters[slug][$eq]=${ slug }`)
        .pipe(
            map( response => response.data),
            map( locations => locations[0])
        );
    }

    public getImgURL (location: Location): string {
        const mediumUrl = location.attributes.photos.data[0].attributes.formats.medium?.url;
        return mediumUrl ? this.baseUrl + mediumUrl : 'default-medium.jpg';
    }
}
