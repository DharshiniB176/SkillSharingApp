import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../../shared/models/user-model';

interface LoginRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL = 'http://localhost:8080';
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.API_URL}/sessions`, request)
      .pipe(
        tap(response => {
          this.token = response.accessToken;
          console.log('JWT stored in memory:', this.token);
        })
      );
  }

  getToken(): string | null {
    return this.token;
  }

  logout(): void {
    this.token = null;
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }
}
