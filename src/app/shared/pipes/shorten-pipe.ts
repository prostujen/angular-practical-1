import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true // Переконайтесь, що це є
})
export class ShortenPipe implements PipeTransform {

  // limit: number = 50 — це значення за замовчуванням
  transform(value: string, limit: number = 50): string {
    if (!value) return '';
    if (value.length <= limit) {
      return value;
    }
    // Обрізаємо і додаємо три крапки
    return value.substring(0, limit) + '...';
  }
}