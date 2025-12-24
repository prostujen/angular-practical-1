import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Перевіряємо через наш сервіс
  // (ми створили isAuthenticated$ як Observable, але для guard простіше перевірити токен напряму)
  if (localStorage.getItem('auth_token')) {
    return true; // Проходь
  } else {

    router.navigate(['/login']);
    return false;
  }
};