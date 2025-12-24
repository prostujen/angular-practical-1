import { Component, OnInit } from '@angular/core'; // <--- 1. Додали OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card';
import { Product } from '../shared/models/product.model';
import { DataService } from '../shared/services/data'; // <--- 2. Імпортували наш сервіс

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FormsModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss']
})
// 3. Додали implements OnInit
export class ItemsListComponent implements OnInit {
  
  searchText: string = '';
  products: Product[] = []; 

  constructor(private dataService: DataService) {}

  // 5. Цей метод запускається автоматично при старті компонента
  ngOnInit(): void {
    // Беремо дані з сервісу
    this.products = this.dataService.getItems();
  }

  // Геттер залишається без змін, він працює вже з завантаженими даними
  get filteredProducts() {
    return this.products.filter(product => 
      product.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  handleCardClick(product: Product) {
    console.log('Обрано:', product.title);
  }
}