import { Injectable, signal, effect } from '@angular/core';
import { single } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ThemeService {

  isDarkMode = signal(false);

  constructor(){

    const saved = localStorage.getItem('theme') === 'dark';
    this.isDarkMode.set(saved);
    document.documentElement.classList.toggle('dark', saved);
  }

  toggleTheme(){
    const isDark = !this.isDarkMode();
    this.isDarkMode.set(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark? 'dark' : 'light');
  }  

}
