import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { of, delay, map } from 'rxjs';
import { AuthService } from '../../core/services/auth-service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CommonModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterComponent {

  private fb = inject(FormBuilder);


  constructor(private auth:AuthService){}

  shakeName = signal(false);
shakeEmail = signal(false);
shakePhone = signal(false);
shakePassword = signal(false);

onNameBlur() {
  if (this.f.fullName.touched && this.f.fullName.invalid) this.shake(this.shakeName);
}

onEmailBlur() {
  if (this.f.email.touched && this.f.email.invalid) this.shake(this.shakeEmail);
}

onPhoneBlur() {
  if (this.f.phoneNumber.touched && this.f.phoneNumber.invalid) this.shake(this.shakePhone);
}

onPasswordBlur() {
  if (this.f.password.touched && this.f.password.invalid) this.shake(this.shakePassword);
}

private shake(signalRef: any) {
  signalRef.set(false);
  setTimeout(() => signalRef.set(true));
  setTimeout(() => signalRef.set(false), 400);
}

  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email], [this.emailExistsValidator]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    password: ['', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/)
    ]]
  });

  get f() {
    return this.registerForm.controls;
  }

  emailExistsValidator(control: AbstractControl) {
    return of(control.value).pipe(
      delay(600),
      map(email =>
        email === 'test@demo.com'
          ? { emailExists: true }
          : null
      )
    );
  }

  @Output() registered = new EventEmitter<void>();

  submit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const payload = {
      fullName: this.registerForm.controls.fullName.value!,
      email: this.registerForm.controls.email.value!,
      phoneNumber: this.registerForm.controls.phoneNumber.value!,
      password: this.registerForm.controls.password.value!
    };

    this.auth.register(payload).subscribe({
      next: () => {
        this.registered.emit();
      },
      error: (err) => {
        if (err.status === 409) {
          this.registerForm.controls.email.setErrors({ emailExists: true });
        }
      }
    });
  }
}