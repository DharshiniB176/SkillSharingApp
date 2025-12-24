import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-oauth-success',
  imports: [],
  templateUrl: './oauth-success.html',
  styleUrl: './oauth-success.scss',
})
export class OauthSuccess implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private auth = inject(AuthService);

 ngOnInit() {
  const token = this.route.snapshot.queryParamMap.get('token');

  if (!token) {
    this.router.navigateByUrl('/auth');
    return;
  }

  this.auth.storeToken(token);

  this.auth.loadMe().subscribe({
    next: () => {
      this.router.navigateByUrl('/dashboard');
    },
    error: () => {
      this.auth.logout();
      this.router.navigateByUrl('/auth');
    }
  });
}

}