
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { Observable, of,throwError as observableThrowError} from 'rxjs';
import { Product } from '../classes/product';


@Injectable()
export class ProductsService {
  private ProductsUrl = 'app/Products';

  constructor(
    private http: HttpClient
  ) { }
  
  getProducts() {
    return this.http
      .get<Product[]>(this.ProductsUrl)
      .pipe(map(api => api), catchError(this.handleError));
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map(Products => Products.find(Product => Product.id === id))
    );
  }
 

  private handleError(res: HttpErrorResponse | any) {
    return observableThrowError(res.error || 'Server error');
  }
 
  

}
