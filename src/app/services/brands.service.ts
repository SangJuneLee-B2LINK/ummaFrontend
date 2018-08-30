import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { Observable, of,throwError as observableThrowError} from 'rxjs';
import { Brand } from '../classes/brand';


@Injectable()
export class BrandsService {
  private BrandsUrl = 'app/Brands';

  constructor(
    private http: HttpClient
  ) { }
  
  getBrands() {
    return this.http
      .get<Brand[]>(this.BrandsUrl)
      .pipe(map(api => api), catchError(this.handleError));
  }

  getBrand(id: number): Observable<Brand> {
    return this.getBrands().pipe(
      map(Brands => Brands.find(Brand => Brand.id === id))
    );
  }
 

  private handleError(res: HttpErrorResponse | any) {
    return observableThrowError(res.error || 'Server error');
  }
 
  

}
