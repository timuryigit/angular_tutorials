import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  usernameEmpty() {
    if (this.username === '')
      return true;
  }

  resetUsername() {
    this.username = '';
  }
}
