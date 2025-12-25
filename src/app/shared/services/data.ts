import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr'; 
import { Product } from '../models/product.model'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'localhost:4200';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {

        this.toastr.error('Не вдалося завантажити товари!', 'Помилка сервера');
        return throwError(() => error);
      })
    );
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        this.toastr.error('Товар не знайдено', 'Помилка');
        return throwError(() => error);
      })
    );
  }

  addItem(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      catchError((error: HttpErrorResponse) => {
        this.toastr.error('Не вдалося додати товар', 'Помилка');
        return throwError(() => error);
      })
    );
  }


  filterItems(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?q=${query}`);
  }
}