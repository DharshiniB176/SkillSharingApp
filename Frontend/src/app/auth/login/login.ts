import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,ButtonModule,InputTextModule,PasswordModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  
  private fb = inject(FormBuilder);

  shakeEmail = signal(false);
  shakePassword = signal(false);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/)
    ]]
  });

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  onEmailBlur() {
    if (this.email.invalid) this.triggerEmailShake();
  }

  onPasswordBlur() {
    if (this.password.invalid) this.triggerPasswordShake();
  }

  private triggerEmailShake() {
    this.shakeEmail.set(false);
    setTimeout(() => this.shakeEmail.set(true));
    setTimeout(() => this.shakeEmail.set(false), 400);
  }

  private triggerPasswordShake() {
    this.shakePassword.set(false);
    setTimeout(() => this.shakePassword.set(true));
    setTimeout(() => this.shakePassword.set(false), 400);
  }

  submit() {
    if (this.loginForm.invalid) {
      this.email.markAsTouched();
      this.password.markAsTouched();
      return;
    }

    console.log(this.loginForm.value);
  }
}