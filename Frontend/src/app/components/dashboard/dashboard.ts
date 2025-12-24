import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-dashboard',
  imports: [Navbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  auth = inject(AuthService);


}
