import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { User } from '../models/user-model';

interface LoginRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  user: User;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly API_URL = 'http://localhost:8080';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';


  user = signal<User | null>(this.loadUser());

  constructor(private http: HttpClient) { }

  login(request: LoginRequest) {
    return this.http.post<AuthResponse>(`${this.API_URL}/sessions`, request).pipe(
      tap(res => {
        localStorage.setItem(this.TOKEN_KEY, res.accessToken);
        localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
        this.user.set(res.user);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.user.set(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  storeToken(token: string) {
  localStorage.setItem(this.TOKEN_KEY, token);

  localStorage.removeItem(this.USER_KEY);
  this.user.set(null);
}



  private loadUser(): User | null {
    const raw = localStorage.getItem(this.USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  loadMe() {
  return this.http.get<User>(`${this.API_URL}/users/me`).pipe(
    tap(user => {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      this.user.set(user);
    })
  );
}

  register(payload: {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }) {
    return this.http.post(`${this.API_URL}/users`, payload);
  }

}
