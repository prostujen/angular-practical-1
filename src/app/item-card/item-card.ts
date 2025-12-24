import { Component } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true, // <--- ДОДАЙТЕ ЦЕЙ РЯДОК
  imports: [],
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss' // або styleUrl: './item-card.scss'
})
export class ItemCardComponent {
}