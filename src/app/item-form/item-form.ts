import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; // 1. Імпорт інструментів форм
import { Router, RouterModule } from '@angular/router'; // 2. Імпорт для навігації
import { DataService } from '../shared/services/data';

@Component({
  selector: 'app-item-form',
  standalone: true,
  // В масив imports додаємо модулі, які використовує цей компонент
  imports: [CommonModule, ReactiveFormsModule, RouterModule], 
  templateUrl: './item-form.html',
  styleUrl: './item-form.scss'
})
export class ItemFormComponent {
  
  productForm: FormGroup;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {
    // Налаштовуємо форму і валідацію
    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl(0, [Validators.required, Validators.min(1)]),
      description: new FormControl('', Validators.required),
      image: new FormControl('') 
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.dataService.addItem(this.productForm.value);
      this.router.navigate(['/items']); // Повертаємось на список
    } else {
      this.productForm.markAllAsTouched(); // Підсвічуємо помилки
    }
  }
}