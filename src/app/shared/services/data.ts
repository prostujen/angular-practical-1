import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model'; // Перевірте шлях до моделі

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Використовуємо порт 3000 для роботи з даними (json-server)
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  // Метод чистий, без catchError - помилки ловить error.interceptor
  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addItem(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  filterItems(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?q=${query}`);
  }
}