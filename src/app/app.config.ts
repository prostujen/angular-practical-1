import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

// 👇 Імпортуємо наші виправлені інтерцептори
import { authInterceptor } from './shared/interceptors/auth.interceptor';
import { errorInterceptor } from './shared/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(), // Анімації для тостера
    provideToastr({      // Налаштування тостера
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    
    // 👇 Підключаємо ОБИДВА інтерцептори у масиві
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
  ]
};