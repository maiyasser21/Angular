import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  _url: string = '../assets/products.json';
  constructor(private http: HttpClient) {}

getAllProducts(): Observable<IProduct[]> {
  return this.http.get<IProduct[]>(this._url).pipe(
    catchError((err) => {
      throw new Error(err.message || 'Internal Server Error');
    })
  );
}

getProductById(prdId: string): Observable<IProduct | null> {
  const id = parseInt(prdId, 10);
  if (isNaN(id)) {
    return of(null);
  }

  return this.http.get<IProduct>(`${this._url}/${id}`).pipe(
    catchError((err) => {
      throw new Error(err.message || 'Internal Server Error');
    })
  );
}

}

