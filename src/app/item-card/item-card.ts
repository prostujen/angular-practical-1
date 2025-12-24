import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.scss']
})
export class ItemCardComponent {
  // Обов'язково має бути @Input, щоб прийняти дані
  @Input() product!: Product;
  
  // Обов'язково має бути @Output, щоб клікнути по картці
  @Output() cardClick = new EventEmitter<Product>();

  onCardClick() {
    this.cardClick.emit(this.product);
  }
}