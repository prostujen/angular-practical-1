import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../shared/models/product.model';

// 👇 1. ІМПОРТУЄМО ФАЙЛИ (Перевірте, щоб шлях був правильним!)
import { ShortenPipe } from '../shared/pipes/shorten-pipe';
import { HighlightDirective } from '../shared/directives/highlight'; 

@Component({
  selector: 'app-item-card',
  standalone: true,
  // 👇 2. ДОДАЄМО ЇХ В IMPORTS (Без цього вони не запрацюють!)
  imports: [CommonModule, RouterModule, ShortenPipe, HighlightDirective], 
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.scss']
})
export class ItemCardComponent {
  @Input() product!: Product;
  @Output() cardClick = new EventEmitter<Product>();

  onCardClick() {
    this.cardClick.emit(this.product);
  }
}