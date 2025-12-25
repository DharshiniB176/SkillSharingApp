import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-now',
  imports: [],
  templateUrl: './join-now.html',
  styleUrl: './join-now.scss',
})
export class JoinNow {

    router = inject(Router)
   goToRegister() {
      this.router.navigate(['/auth'], { queryParams: { mode: 'register' } });
    }
  

}
