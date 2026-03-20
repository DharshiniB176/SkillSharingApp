import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { RequestService } from '../../core/services/request-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incoming-request',
  imports: [],
  templateUrl: './incoming-request.html',
  styleUrl: './incoming-request.scss',
})
export class IncomingRequest implements OnInit{

  requests: any[] = [];

  constructor(
    private requestService: RequestService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {

    const userId = this.auth.user()?.id;

    if (!userId) return;

    this.requestService.getIncomingRequests(userId)
      .subscribe((data: any) => {

        this.requests = data;

      });

  }

  acceptRequest(request: any) {

    this.requestService.updateRequestStatus(request.id, "ACCEPTED")
      .subscribe(() => {

        this.loadRequests();

      });

  }

  rejectRequest(request: any) {

    this.requestService.updateRequestStatus(request.id, "REJECTED")
      .subscribe(() => {

        this.loadRequests();

      });

  }

 startCall(request: any) {

  console.log(request); // debug

  const room = `skillshare-${request.id}`;

  this.router.navigate(['/call', room]);

}
}
