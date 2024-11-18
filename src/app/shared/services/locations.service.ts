import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '@shared/models/location';
import { map, Observable } from 'rxjs';

/**
 * Servicio que proporciona los métodos para solicitar la información de las diferentes casas desde un archivo JSON local
 */
@Injectable({providedIn: 'root'})
export class LocationsService {
    private locationsUrl: string = '/data/locations.json';
    constructor( private http: HttpClient ) { }
    
    /**
     * Método para obtener la lista de todas las casas.
     * 
     * @param locale Código de idioma para obtener las ubicaciones
     * @returns {Observable<Location[]>} Un observable que emite todas las casas
     */
    public getAllLocations(locale: string): Observable<any> {
        return this.http.get(this.locationsUrl);
    }

    /**
     * Método para obtener un arreglo de casas cuyos slugs estén incluidos en el arreglo de slugs proporcionado
     * 
     * @param slugs Arreglo de slugs únicos de las casas
     * @param locale Código de idioma para obtener las ubicaciones
     * @returns {Observable<Location[]>} Un observable que emite un arreglo de casas cuyos slugs coinciden con los proporcionados
     */
    public getLocationsBySlugs(slugs: string[], locale: string): Observable<Location[]> {
        return this.http.get<Location[]>(this.locationsUrl).pipe(
            map(locations => locations.filter(location => slugs.includes(location.slug)))
        );
    }
    
    /**
     * Método para obtener la ubicación de una sola casa (con base en su slug)
     * 
     * @param slug Slug único de la casa
     * @returns {Observable<Location>} Un observable que emite la información de la casa
     */
    public getLocationBySlug(slug: string): Observable<Location> {
        return this.http.get<Location[]>(this.locationsUrl).pipe(
            map((locations) => locations.find(location => location.slug === slug)!),
        );
    }

    // public getRichCardInfoBySlug(slug: string): Observable<Location> {
    //     return this.http.get<StrapiResponse>(`${ this.baseAPIUrl }/locations?populate[0]=coverPicture`)
    //     .pipe(
    //         map( response => response.data ),
    //         map( locations => locations[0] ),
    //     );
    // }
}
