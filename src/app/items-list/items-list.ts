import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // <--- 1. ПЕРЕВІРТЕ ЦЕЙ ІМПОРТ

import { ItemCardComponent } from '../item-card/item-card';
import { Product } from '../shared/models/product.model';
import { DataService } from '../shared/services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  // 2. ПЕРЕВІРТЕ, ЧИ Є RouterModule У ЦЬОМУ СПИСКУ:
  imports: [CommonModule, ItemCardComponent, FormsModule, RouterModule], 
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss']
})
export class ItemsListComponent implements OnInit {
  
  products$!: Observable<Product[]>; 
  searchText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.products$ = this.dataService.getItems();
  }

  onSearch(): void {
    this.dataService.filterItems(this.searchText);
  }

  handleCardClick(product: Product) {
    console.log('Обрано:', product.title);
  }
}