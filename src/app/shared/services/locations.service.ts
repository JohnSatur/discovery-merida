import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location, StrapiResponse } from '../models/location.interfaces';
import { environments } from '../../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LocationsService {
    private baseAPIUrl: string = environments.baseAPIUrl;

    constructor( private http: HttpClient ) { }
    
    public getLocations(locale: string): Observable<Location[]> {
        return this.http.get<StrapiResponse>(`${ this.baseAPIUrl }/locations?populate[0]=reviews.profilePicture&populate[1]=amenities&populate[2]=coverPicture&populate[4]=gallery&populate[3]=descriptionPicture&locale=es-MX`)
        .pipe(
            map( response => response.data),
        );
    }

    public getLocationBySlug(slug: string): Observable<Location> {
        return this.http.get<StrapiResponse>(`${ this.baseAPIUrl }/locations?populate[0]=reviews.profilePicture&populate[1]=amenities&populate[2]=coverPicture&populate[4]=gallery&populate[3]=descriptionPicture&filters[slug][$eq]=${ slug }`)
        .pipe(
            map( response => response.data),
            map( locations => locations[0])
        );
    }
}
