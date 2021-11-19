import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brewery } from './brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {


  BREWERY_URL = 'https://api.openbrewerydb.org/breweries';

  constructor(private http: HttpClient) {}

  _getAllBreweries() {
    return this.http.get<Brewery[]>(this.BREWERY_URL);
  }

  _getAllBreweriesByType(type: any) {
    return this.http.get<Brewery[]>(this.BREWERY_URL + '?by_type=' + type);
  }

}