import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { Observable, of,throwError as observableThrowError} from 'rxjs';
import { Country } from '../classes/country';


@Injectable()
export class CountryService {
  private CountryUrl = 'app/Countrys';

  constructor(
    private http: HttpClient
  ) { }
  
  getCountries() {
    return this.http
      .get<Country[]>(this.CountryUrl)
      .pipe(map(api => api), catchError(this.handleError));
  }

  getCountry(id: number): Observable<Country> {
    return this.getCountries().pipe(
      map(Countrys => Countrys.find(Country => Country.id === id))
    );
  }
 

  private handleError(res: HttpErrorResponse | any) {
    return observableThrowError(res.error || 'Server error');
  }
 
  

}
