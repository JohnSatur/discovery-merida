import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location, StrapiResponse } from '../models/location.interfaces';
import { environments } from '../../../environments/environment';
import { map, Observable } from 'rxjs';

/**
 * Servicio que proporciona los métodos para solicitar la información de las diferentes casas de Discovery Mérida al backend (Strapi)
 */
@Injectable({providedIn: 'root'})
export class LocationsService {
    private baseAPIUrl: string = environments.baseAPIUrl; // URL base

    constructor( private http: HttpClient ) { }
    
    /**
     * Método para obtener la lista de todas las casas.
     * 
     * @param locale Código de idioma para obtener las ubicaciones
     * @returns {Observable<Location[]>} Un observable que emite todas las casas
     */
    public getLocations(locale: string): Observable<Location[]> {
        return this.http.get<StrapiResponse>(`${ this.baseAPIUrl }/locations?populate[0]=reviews.profilePicture&populate[1]=amenities&populate[2]=coverPicture&populate[4]=gallery&populate[3]=descriptionPicture&locale=es-MX`)
        .pipe(
            map( response => response.data), // Mapea para obtener solo la data de las casas
        );
    }

    /**
     * Método para obtener la ubicación de una sola casa (con base en su slug)
     * 
     * @param slug Slug único de la casa
     * @returns {Observable<Location>} Un observable que emite la información de la casa
     */
    public getLocationBySlug(slug: string): Observable<Location> {
        return this.http.get<StrapiResponse>(`${ this.baseAPIUrl }/locations?populate[0]=reviews.profilePicture&populate[1]=amenities&populate[2]=coverPicture&populate[4]=gallery&populate[3]=descriptionPicture&filters[slug][$eq]=${ slug }`)
        .pipe(
            map( response => response.data), // Mapea para obtener solo la data de la casa
            map( locations => locations[0]) // Mapea para obtener el primer elemento del arreglo
        );
    }
}
