import { Component, OnInit, OnDestroy } from '@angular/core'; // <--- 1. Додали OnDestroy
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card';
import { Product } from '../shared/models/product.model';
import { DataService } from '../shared/services/data'; // Перевірте шлях імпорту
import { Subscription } from 'rxjs'; // <--- 2. Імпорт для типу підписки

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FormsModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss']
})
export class ItemsListComponent implements OnInit, OnDestroy {
  
  products: Product[] = [];
  searchText: string = '';
  
  // Змінна для зберігання підписки, щоб потім відписатися
  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // 3. ПІДПИСКА (Subscribe)
    // Ми слухаємо потік. Як тільки сервіс скаже "next", ми отримаємо дані.
    this.subscription = this.dataService.getItems().subscribe(data => {
      this.products = data;
    });
  }

  // 4. Метод пошуку (тепер він просто смикає сервіс)
  onSearch(): void {
    this.dataService.filterItems(this.searchText);
  }

  handleCardClick(product: Product) {
    console.log('Обрано:', product.title);
  }

  // 5. ВІДПИСКА (Unsubscribe) - обов'язково для запобігання витоку пам'яті
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}