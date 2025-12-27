import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

    @Input() open = true;
  @Input() mini = false;

  @Output() close = new EventEmitter<void>();
  @Output() toggleMini = new EventEmitter<void>();

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigateByUrl(path);
    if (window.innerWidth < 768) {
      this.close.emit();
    }
  }

}
