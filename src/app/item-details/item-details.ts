import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../shared/models/product.model';
import { DataService } from '../shared/services/data';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-details.html',
  styleUrl: './item-details.scss'
})
export class ItemDetailsComponent implements OnInit {
  
  product: Product | undefined;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      this.dataService.getById(id).subscribe({
        next: (data) => {
          console.log('Дані отримано!', data);
          this.product = data;
          this.isLoading = false;
          
          this.cdr.detectChanges(); 
        },
        error: (err) => {
          console.error('Помилка:', err);
          this.isLoading = false;
          this.cdr.detectChanges(); 
        }
      });
    } else {
      this.isLoading = false;
    }
  }
}