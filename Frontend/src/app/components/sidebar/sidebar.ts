import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

    @Input() open = true;
  @Input() mini = false;

  @Output() close = new EventEmitter<void>();
  @Output() toggleMini = new EventEmitter<void>();

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigateByUrl(path);
    if (window.innerWidth < 768) {
      this.close.emit();
    }
  }

  menu = [
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    route: '/dashboard'
  },
  {
    label: 'Career',
    icon: 'pi pi-briefcase',
    route: '/dashboard/carrer'
  },
  {
    label: 'Skills',
    icon: 'pi pi-star',
    route: '/dashboard/my-skills'
  },
  {
    label: 'Matches',
    icon: 'pi pi-user-plus',
    route: '/dashboard/matches'
  },
  {
    label: 'Incoming Requests',
    icon: 'pi pi-envelope',
    route: '/dashboard/incoming-requests'
  },
  {
  label: 'My Requests',
  icon: 'pi pi-send',
  route: '/dashboard/my-requests'
},
{
  label: 'Interests',
  icon: 'pi pi-heart',
  route: '/dashboard/interest'
},
{
  label: 'Courses',
  icon: 'pi pi-book',
  route: '/dashboard/course'
}
];

}
