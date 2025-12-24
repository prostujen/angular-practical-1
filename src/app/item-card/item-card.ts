import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <--- ВАЖЛИВО!
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule], // <--- Додали сюди
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss'
})
export class ItemCardComponent {
  @Input() item!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  onBtnClick() {
    this.addToCart.emit(this.item);
  }
}