import { Component, Input, Output, EventEmitter } from '@angular/core'; // <--- 1. Додали Output, EventEmitter
import { CommonModule } from '@angular/common';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss'
})
export class ItemCardComponent {
  @Input() item!: Product;

  // 2. Створюємо подію (Output)
  @Output() addToCart = new EventEmitter<Product>();

  // 3. Метод, який викликається при кліку на кнопку
  onBtnClick() {
    this.addToCart.emit(this.item); // Відправляємо товар нагору
  }
}