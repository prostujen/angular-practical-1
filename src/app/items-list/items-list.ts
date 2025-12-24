import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Тут живе AsyncPipe
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card';
import { Product } from '../shared/models/product.model';
import { DataService } from '../shared/services/data';
import { Observable } from 'rxjs'; // Нам треба тільки Observable

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FormsModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss']
})
export class ItemsListComponent implements OnInit {
  
  // Замість масиву products, у нас тепер потік products$ (долар в кінці - це домовленість для Observable)
  products$!: Observable<Product[]>; 
  searchText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Ми просто присвоюємо потік, не підписуючись (subscribe не пишемо!)
    this.products$ = this.dataService.getItems();
  }

  onSearch(): void {
    this.dataService.filterItems(this.searchText);
  }

  handleCardClick(product: Product) {
    console.log('Обрано:', product.title);
  }
}