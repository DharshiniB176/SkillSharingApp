import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {


  constructor(private auth: AuthService, private userService:UserService){}
  email: string = "surya@gmail.com";
  password: string = "surya@123";

  result:any = '';

  loginData() {
    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: res => console.log('Login success:', res),
      error: err => console.error('Login error:', err)
    });
  }

   loadProfile() {
    this.userService.getMe().subscribe(res => {
      this.result = res;
      console.log('User profile:', res);
    });
  }
}
