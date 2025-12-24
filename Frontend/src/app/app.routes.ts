import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { AuthContainer } from './auth/auth-container/auth-container';
import { Dashboard } from './components/dashboard/dashboard';
import { authGuard } from './auth/guards/auth-guard';
import { OauthSuccess } from './auth/oauth/oauth-success/oauth-success';
import { Sidebar } from './components/sidebar/sidebar';
import { DashboardLayout } from './components/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'auth', component: AuthContainer },{
  path: 'dashboard',
  component: DashboardLayout,
  canActivate: [authGuard],
  children: [
    {
      path: '',
      component: Dashboard
    }
  ]
},

   { path: 'oauth-success', component: OauthSuccess },
   {path: 'sidebar',component: Sidebar}

];
