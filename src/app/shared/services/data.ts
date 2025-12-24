import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allProducts: Product[] = [
    { id: 1, title: 'iPhone 15', description: 'Apple phone', image: '', price: 999 },
    { id: 2, title: 'Samsung S24', description: 'Android phone', image: '', price: 899 },
    { id: 3, title: 'Nokia 3310', description: 'Classic', image: '', price: 50 },
    { id: 4, title: 'Xiaomi 14', description: 'Flagship killer', image: '', price: 600 }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.allProducts);

  constructor() { }

  getItems(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  filterItems(query: string): void {
    const filtered = this.allProducts.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    this.productsSubject.next(filtered);
  }

  getById(id: number): Product | undefined {
    return this.allProducts.find(p => p.id === id);
  } 

  // Метод додавання
  addItem(newProduct: Product): void {
    // 1. Генеруємо ID
    const maxId = this.allProducts.length > 0 
      ? Math.max(...this.allProducts.map(p => p.id)) 
      : 0;
    newProduct.id = maxId + 1;

    // 2. Додаємо в масив
    this.allProducts.push(newProduct);
    
    // 3. Оновлюємо список для всіх
    this.productsSubject.next(this.allProducts);
  }

}