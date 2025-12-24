import { Component, HostListener, OnInit, signal } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Navbar } from "../navbar/navbar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [Sidebar, Navbar, RouterModule],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
})
export class DashboardLayout implements OnInit{
  sidebarOpen = signal(true);
  miniMode = signal(false);

  ngOnInit() {
    this.syncWithScreen();
  }

  @HostListener('window:resize')
  syncWithScreen() {
    if (window.innerWidth < 768) {
      this.sidebarOpen.set(false);
      this.miniMode.set(false);
    } else {
      this.sidebarOpen.set(true);
    }
  }

  toggleSidebar() {
  if (this.sidebarOpen()) {
    this.sidebarOpen.set(false);
    this.miniMode.set(false);
  } else {
    this.sidebarOpen.set(true);
  }
}

closeSidebar() {
  this.sidebarOpen.set(false);
  this.miniMode.set(false);
}

toggleMiniMode() {
  if (window.innerWidth >= 768) {
    this.miniMode.update(v => !v);
    this.sidebarOpen.set(true);
  }
}

}