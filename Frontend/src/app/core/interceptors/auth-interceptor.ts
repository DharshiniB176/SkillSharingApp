// import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { AuthService } from '../services/auth-service';
// import { Router } from '@angular/router';
// import { catchError, throwError } from 'rxjs';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const auth = inject(AuthService);
//   const router = inject(Router);

//   const token = auth.getToken();

//   const authReq = token
//     ? req.clone({
//         setHeaders: { Authorization: `Bearer ${token}` }
//       })
//     : req;

//   return next(authReq).pipe(
//     catchError(err => {
//       if (err.status === 401) {
//         auth.logout();
//         router.navigateByUrl('/auth');
//       }
//       return throwError(() => err);
//     })
//   );
// };


import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

let isRedirecting = false;

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  const token = auth.getToken();

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expired = payload.exp * 1000 < Date.now();

      if (expired && !isRedirecting) {

        isRedirecting = true;

        alert('Session expired. Please login again.');

        auth.logout();
        router.navigateByUrl('/auth');

        setTimeout(() => isRedirecting = false, 2000);

        return throwError(() => new Error('Token expired'));
      }
    } catch (e) {
      console.error('Invalid token');
    }
  }

  const authReq = token
    ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      })
    : req;

  return next(authReq).pipe(

    catchError(err => {

      if (err.status === 401 && !isRedirecting) {

        isRedirecting = true;

        alert('Session expired. Please login again.');

        auth.logout();
        router.navigateByUrl('/auth');

        setTimeout(() => isRedirecting = false, 2000);
      }

      return throwError(() => err);
    })

  );
};
