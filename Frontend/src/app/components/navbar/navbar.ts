import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { Router } from '@angular/router';
import { Theme } from '@primeuix/themes/types';
import { ThemeService } from '../../core/services/theme-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

 @Input() sidebarOpen = false;
 @Output() menuToggle = new EventEmitter<void>();

  constructor(
    public auth: AuthService,
    private router: Router,
    public theme: ThemeService
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/auth');
  }
}
