import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CodeSandbox';
  count = 0;
  Increase() {
    this.count = this.count + 1;
  }
  Decrease() {
    this.count = this.count - 1;
    if (this.count < 0) {
      this.count = 0;
    }
  }
  Reset() {
    this.count = 0;
  }
}
