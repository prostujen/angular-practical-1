import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs'; // <--- 1. Важливі імпорти RxJS

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // "Сирі" дані (база даних)
  private allProducts: Product[] = [
    { id: 1, title: 'iPhone 15', description: 'Apple phone', image: '', price: 999 },
    { id: 2, title: 'Samsung S24', description: 'Android phone', image: '', price: 899 },
    { id: 3, title: 'Nokia 3310', description: 'Classic', image: '', price: 50 },
    { id: 4, title: 'Xiaomi 14', description: 'Flagship killer', image: '', price: 600 }
  ];

  // 2. BehaviorSubject — це джерело потоку. Початкове значення — всі товари.
  private productsSubject = new BehaviorSubject<Product[]>(this.allProducts);

  constructor() { }

  // 3. Метод для отримання потоку (Observable), на який будуть підписуватися компоненти
  getItems(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  // 4. Логіка фільтрації тепер тут!
  filterItems(query: string): void {
    const filtered = this.allProducts.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    
    // Емітимо (викидаємо) нові дані в потік. Всі підписники миттєво їх отримають.
    this.productsSubject.next(filtered);
  }
}