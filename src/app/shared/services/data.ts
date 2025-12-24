import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class DataService { 
  
  private apiUrl = '/products'; 

  constructor(private http: HttpClient) { }

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error:', error);
        return throwError(() => new Error('Error loading products'));
      })
    );
  }

  filterItems(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?q=${query}`);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addItem(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, newProduct);
  }
}