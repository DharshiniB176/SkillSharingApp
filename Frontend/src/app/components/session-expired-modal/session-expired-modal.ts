import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-expired-modal',
  imports: [DialogModule, ButtonModule],
  templateUrl: './session-expired-modal.html',
  styleUrl: './session-expired-modal.scss',
})
export class SessionExpiredModal {

   visible = false;

  constructor(private router: Router) {}

  open() {
    this.visible = true;
  }

  goLogin() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
