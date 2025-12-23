import { Component, effect, inject, signal } from '@angular/core';
import { Login } from "../login/login";
import { RegisterComponent } from '../register/register';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  imports: [Login, RegisterComponent],
  templateUrl: './auth-container.html',
  styleUrl: './auth-container.scss',
})
export class AuthContainer {
   private route = inject(ActivatedRoute);

  isRegister = signal(false);

  constructor() {
    effect(() => {
      const mode = this.route.snapshot.queryParamMap.get('mode');
      this.isRegister.set(mode === 'register');
    });
  }

  showRegister() {
    this.isRegister.set(true);
  }

  showLogin() {
    this.isRegister.set(false);
  }
}
