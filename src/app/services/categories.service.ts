import { Injectable } from '@angular/core';
import { Category } from '../classes/category';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private CategoriesUrl = 'app/Categories';
  constructor(
    private http: HttpClient
  ) { }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.CategoriesUrl)
      .pipe(
        
        catchError(this.handleError('getCategories', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
 
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
