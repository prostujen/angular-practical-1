import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; // Перевірте шлях до інтерфейсу!

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // 1. Сюди перенесли масив (Mock Data)
  private products: Product[] = [
    { id: 1, title: 'iPhone 15', description: 'Apple phone', image: '', price: 999 },
    { id: 2, title: 'Samsung S24', description: 'Android phone', image: '', price: 899 },
    { id: 3, title: 'Nokia 3310', description: 'Classic', image: '', price: 50 },
    { id: 4, title: 'Xiaomi 14', description: 'Flagship killer', image: '', price: 600 } // Додав ще один для тесту
  ];

  constructor() { }

  // 2. Метод, який віддає дані тому, хто попросить
  getItems(): Product[] {
    return this.products;
  }
}