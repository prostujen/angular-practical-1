import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent], // Підключаємо роутер і лейаут
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { // <--- Ось цей клас шукає система!
  title = 'my-app';
}