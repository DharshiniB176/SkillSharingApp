import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service';
import { Router } from '@angular/router';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, PasswordModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile  implements OnInit {

  saving = signal(false);
  passwordSaving = signal(false);

  profileForm!: FormGroup;
  passwordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {

    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]]
    });

    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/)
      ]]
    });

    const user = this.auth.user();
    if (user) {
      this.profileForm.patchValue({
        fullName: user.fullName,
        phoneNumber: user.phoneNumber
      });
    }
  }

  updateProfile() {
    if (this.profileForm.invalid) return;

    this.saving.set(true);

    this.auth.updateProfile(this.profileForm.value as any)
      .subscribe({
        next: () => {
          this.profileForm.markAsPristine();
          this.saving.set(false);
        },
        error: () => this.saving.set(false)
      });
  }

  changePassword() {
    if (this.passwordForm.invalid) return;

    this.passwordSaving.set(true);

    this.auth.changePassword(this.passwordForm.value as any)
      .subscribe({
        next: () => {
          this.auth.logout();
          this.router.navigateByUrl('/auth');
        },
        error: () => this.passwordSaving.set(false)
      });
  }
}