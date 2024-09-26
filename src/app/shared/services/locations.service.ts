import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location, StrapiResponse } from '../models/location.interface';
import { environments } from '../../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LocationsService {
    private baseUrl: string = environments.baseUrl;

    constructor( private http: HttpClient ) { }
    
    getLocations(): Observable<Location[]> {
        return this.http.get<StrapiResponse>(`${ this.baseUrl }/locations?populate=photos,amenities,reviews.profilePicture`)
        .pipe(
            map( response => response.data)
        );
    }

    getLocationBySlug(slug: string): Observable<Location> {
        return this.http.get<StrapiResponse>(`${ this.baseUrl }/locations?populate=photos,amenities,reviews.profilePicture&filters[slug][$eq]=${ slug }`)
        .pipe(
            map( response => response.data),
            map( locations => locations[0])
        );
    }
}
