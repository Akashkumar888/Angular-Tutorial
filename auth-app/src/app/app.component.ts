import { Component } from '@angular/core';
import { AuthComponent } from './features/auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthComponent],
  template: `<app-auth></app-auth>`
})
export class AppComponent {}