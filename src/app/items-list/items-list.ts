import { Component } from '@angular/core';
import { Product } from '../shared/models/product.model'; // Перевірте шлях до вашого файлу!
import { CommonModule } from '@angular/common'; // Потрібно для *ngFor (якщо standalone)
import { ItemCardComponent } from '../item-card/item-card'; // Імпортуємо картку

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss']
})
export class ItemsListComponent {

  products: Product[] = [
    {
      id: 1,
      title: 'Товар 1',
      description: 'Опис першого товару',
      image: 'https://via.placeholder.com/150',
      price: 100
    },
    {
      id: 2,
      title: 'Товар 2',
      description: 'Опис другого товару',
      image: 'https://via.placeholder.com/150',
      price: 200
    },
    {
      id: 3,
      title: 'Товар 3',
      description: 'Опис третього товару',
      image: 'https://via.placeholder.com/150',
      price: 300
    }
  ];
}