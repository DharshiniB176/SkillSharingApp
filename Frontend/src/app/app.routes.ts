import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { AuthContainer } from './auth/auth-container/auth-container';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'auth', component: AuthContainer },
  { path: 'dashboard', component: Dashboard }
];
