import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { Observable, of,throwError as observableThrowError} from 'rxjs';
import { Brand } from '../classes/brand';
import { Product } from '../classes/product';
import { ProductCardComponent } from '../components/reuses/product-card/product-card.component';


@Injectable()
export class BrandsService {
  private BrandsUrl = 'app/Brands?filter[limit]=30';
  private BrandsByProductsUrl = 'app/Brands/{id}/products'
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
  getBrandsByProducts() {
    return this.http
      .get<Brand[]>(this.BrandsByProductsUrl)
      .pipe(map(api => api), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    return observableThrowError(res.error || 'Server error');
  }
 
  

}
