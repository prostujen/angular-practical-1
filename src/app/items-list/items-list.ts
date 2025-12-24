import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- 1. ВАЖЛИВО: Імпорт для ngModel
import { ItemCardComponent } from '../item-card/item-card'; // або '../item-card/item-card.ts'
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FormsModule], // <--- 2. Додали FormsModule сюди
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss']
})
export class ItemsListComponent {
  // Змінна для поля пошуку
  searchText: string = '';

  products: Product[] = [
    { id: 1, title: 'iPhone 15', description: 'Apple phone', image: '', price: 999 },
    { id: 2, title: 'Samsung S24', description: 'Android phone', image: '', price: 899 },
    { id: 3, title: 'Nokia 3310', description: 'Classic', image: '', price: 50 }
  ];

  // 3. Геттер для фільтрації (автоматично оновлює список при зміні searchText)
  get filteredProducts() {
    return this.products.filter(product => 
      product.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // 4. Метод, який приймає подію від картки
  handleCardClick(product: Product) {
    console.log('Користувач обрав товар:', product.title);
    alert(`Ви обрали: ${product.title}`); // Для наочності
  }
}