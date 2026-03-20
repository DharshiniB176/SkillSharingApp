import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { AuthContainer } from './auth/auth-container/auth-container';
import { authGuard } from './auth/guards/auth-guard';
import { OauthSuccess } from './auth/oauth/oauth-success/oauth-success';
import { Sidebar } from './components/sidebar/sidebar';
import { DashboardLayout } from './components/dashboard-layout/dashboard-layout';
import { Dashboard } from './components/dashboard/dashboard';
import { MySkills } from './components/skills/my-skills/my-skills';
import { Matches } from './components/skills/matches/matches';
import { IncomingRequest } from './components/incoming-request/incoming-request';
import { MyRequests } from './components/my-requests/my-requests';
import { VideoCall } from './components/video-call/video-call';
import { Interests } from './components/interests/interests';
import { Carrer } from './components/carrer/carrer';
import { Courses } from './components/courses/courses';
import { CourseDetails } from './components/courses/course-details/course-details';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'auth', component: AuthContainer },
  {
  path: 'dashboard',
  component: DashboardLayout,
  canActivate: [authGuard],
  children: [
    {path: '', component: Dashboard,  pathMatch: 'full'},
      {path: 'my-skills',component: MySkills},
      { path: 'matches', component: Matches },
    { path: 'incoming-requests', component: IncomingRequest },
    { path: 'my-requests', component: MyRequests },
    { path: 'call/:room', component: VideoCall },
    { path: 'interest', component: Interests},
    { path: 'carrer', component: Carrer },
    { path: 'course', component: Courses},
    { path: 'courses/:id', component: CourseDetails},

  ]
},
{
  path: 'profile',
  loadComponent: () =>
    import('./components/user/profile/profile').then(m => m.Profile)
},


   { path: 'oauth-success', component: OauthSuccess },



];
