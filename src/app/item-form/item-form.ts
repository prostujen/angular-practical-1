import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../shared/services/data';

@Component({
  selector: 'app-item-form',
  standalone: true,
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
    // Ініціалізація форми з валідаторами
    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl(0, [Validators.required, Validators.min(1)]),
      description: new FormControl('', Validators.required),
      image: new FormControl('') 
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      // ВАЖЛИВО: Оскільки це HTTP-запит, треба використати .subscribe()
      // Запит відправиться тільки тоді, коли ми підпишемось
      this.dataService.addItem(this.productForm.value).subscribe({
        next: () => {
          // Цей код виконається, коли сервер скаже "ОК"
          console.log('Товар успішно додано!');
          this.router.navigate(['/items']);
        },
        error: (err) => {
          // Обробка помилки (якщо сервер не працює)
          console.error('Помилка при додаванні:', err);
          alert('Не вдалося зберегти товар. Перевірте, чи запущено json-server.');
        }
      });
    } else {
      // Якщо форма не валідна, підсвічуємо поля червоним
      this.productForm.markAllAsTouched();
    }
  }
}