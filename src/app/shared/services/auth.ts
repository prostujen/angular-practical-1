import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Змінна, яка каже, чи ми залогінені (перевіряємо наявність токена при старті)
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) { }

  private hasToken(): boolean {
    // !! перетворює рядок на boolean (true, якщо токен є)
    return !!localStorage.getItem('auth_token'); 
  }

  login(username: string, pass: string): boolean {
    // Імітація перевірки пароля
    if (username === 'admin' && pass === '12345') {
      // 1. Зберігаємо токен
      localStorage.setItem('auth_token', 'fake-jwt-token-xyz123');
      // 2. Повідомляємо систему, що ми увійшли
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    // Видаляємо токен і перекидаємо на головну
    localStorage.removeItem('auth_token');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/items']);
  }
}