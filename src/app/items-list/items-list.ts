import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// 1. Імпорт картки
import { ItemCardComponent } from '../item-card/item-card';

import { Product } from '../shared/models/product.model';
import { DataService } from '../shared/services/data';
import { AuthService } from '../shared/services/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  // 2. Додаємо ItemCardComponent сюди, щоб HTML його побачив
  imports: [CommonModule, ItemCardComponent, FormsModule, RouterModule], 
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss']
})
export class ItemsListComponent implements OnInit {
  
  products$!: Observable<Product[]>; 
  searchText: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.products$ = this.dataService.getItems();

    this.authService.isAuthenticated$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  onSearch(): void {
    this.products$ = this.dataService.filterItems(this.searchText);
  }

  logout(): void {
    this.authService.logout();
  }

  handleCardClick(product: Product) {
    console.log('Обрано:', product.title);
  }
}