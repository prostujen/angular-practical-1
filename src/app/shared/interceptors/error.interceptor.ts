import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Тут ваша логіка помилок
      if (error.status === 401) {
        toastr.error('Авторизуйтесь!', 'Помилка 401');
      } else if (error.status >= 500) {
        toastr.error('Помилка сервера', 'Помилка 500');
      } else {
        toastr.error('Щось пішло не так', 'Помилка');
      }
      return throwError(() => error);
    })
  );
};