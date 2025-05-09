import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  toggleTheme() {
    const html = document.documentElement;
    html.setAttribute('data-theme',
      html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  }

  logout() {
    console.log('Cerrando sesión...');
  }

}
