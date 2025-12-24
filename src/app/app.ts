import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout';
// 1. Додаємо імпорт файлу
import { ItemsListComponent } from './items-list/items-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Додаємо компонент у список imports
  imports: [RouterOutlet, LayoutComponent, ItemsListComponent], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'my-app';
}