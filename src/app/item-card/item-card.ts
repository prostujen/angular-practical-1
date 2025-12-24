import { Component, Input } from '@angular/core'; 
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
}