import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true 
})
export class ShortenPipe implements PipeTransform {

  // limit: number = 50 
  transform(value: string, limit: number = 50): string {
    if (!value) return '';
    if (value.length <= limit) {
      return value;
    }
    // Обрізаємо і додаємо три крапки
    return value.substring(0, limit) + '...';
  }
}