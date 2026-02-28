import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';   // ✅ ADD THIS

type Mode = 'login' | 'signup';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],   // ✅ ADD HERE
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  mode: Mode = 'login';

  fullName: string = '';
  email: string = '';
  password: string = '';

  toggleMode() {
    this.mode = this.mode === 'login' ? 'signup' : 'login';
  }

  onSubmit() {
    console.log({
      mode: this.mode,
      fullName: this.fullName,
      email: this.email,
      password: this.password
    });

    if (this.mode === 'signup') {
      alert(`Welcome ${this.fullName}`);
    } else {
      alert(`Welcome back`);
    }
  }
}