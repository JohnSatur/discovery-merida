import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../models/location.interface';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LocationsService {
    private baseUrl: string = environments.baseUrl;

    constructor( private http: HttpClient ) { }
    
    getLocations(): Observable<Location[]> {
        return this.http.get<Location[]>(`${ this.baseUrl }/locations`);
    }
}
