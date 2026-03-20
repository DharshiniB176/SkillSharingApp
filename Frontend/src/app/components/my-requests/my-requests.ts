import { Component } from '@angular/core';
import { RequestService } from '../../core/services/request-service';
import { AuthService } from '../../core/services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-requests',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './my-requests.html',
  styleUrl: './my-requests.scss',
})
export class MyRequests {

    requests: any[] = [];

  constructor(
    private requestService: RequestService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {

    const userId = this.auth.user()?.id;

    if (!userId) return;

    this.requestService.getOutgoingRequests(userId)
      .subscribe((data: any) => {

        this.requests = data;

      });

  }

}
