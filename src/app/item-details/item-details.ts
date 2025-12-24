import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'; // <--- 1. Для роботи з URL
import { CommonModule } from '@angular/common';
import { Product } from '../shared/models/product.model';
import { DataService } from '../shared/services/data';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterModule], // <--- Додали RouterModule (для кнопки "Назад")
  templateUrl: './item-details.html',
  styleUrl: './item-details.scss'
})
export class ItemDetailsComponent implements OnInit {
  
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute, // Дозволяє читати URL
    private dataService: DataService // Дозволяє брати дані
  ) {}

  ngOnInit(): void {
    // Отримуємо 'id' з параметрів маршруту
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Шукаємо товар через сервіс
    if (id) {
      this.product = this.dataService.getById(id);
    }
  }
}