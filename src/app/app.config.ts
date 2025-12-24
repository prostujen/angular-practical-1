import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; // <--- Імпорт

import { routes } from './app.routes';
import { baseUrlInterceptor } from './shared/interceptors/base-url.interceptor';
import { authInterceptor } from './shared/interceptors/auth.interceptor'; // <--- Імпорт

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Підключаємо HTTP клієнт з нашим інтерсептором
    provideHttpClient(withInterceptors([baseUrlInterceptor, authInterceptor]))
  ]
};