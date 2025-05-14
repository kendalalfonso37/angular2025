import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notifier = inject(NotificationService);

  return next(req).pipe(
    catchError((err) => {
      notifier.show(
        'error',
        err?.error?.message || 'Ocurrió un error inesperado.'
      );
      return throwError(() => err);
    })
  );
};
