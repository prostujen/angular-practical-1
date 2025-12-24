import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Дістаємо токен
  const token = localStorage.getItem('auth_token');

  if (token) {
    // Якщо токен є, клонуємо запит і додаємо заголовок
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq);
  }

  // Якщо немає, пускаємо запит "голим"
  return next(req);
};