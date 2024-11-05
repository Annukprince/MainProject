import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-signup-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-signup-modal.component.html',
  styleUrls: ['./login-signup-modal.component.css'] // Corrected to `styleUrls`
})
export class LoginSignupModalComponent {

  @Output() closeModal = new EventEmitter<void>();

  isLogin = true;
  email = '';
  password = '';
  firstName = ''; // New field
  lastName = '';  // New field
  phoneNumber = ''; // New field
  role = 'USER'; // New field with default value

  close() {
    this.closeModal.emit();
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.email = '';
    this.password = '';
    this.firstName = ''; // Reset first name on toggle
    this.lastName = '';  // Reset last name on toggle
    this.phoneNumber = ''; // Reset phone number on toggle
    this.role = 'USER'; // Reset role on toggle
  }

  onSubmit() {
    if (this.isLogin) {
      console.log('Logging in with:', this.email, this.password);
      // Implement login logic here
    } else {
      console.log('Signing up with:', this.firstName, this.lastName, this.email, this.password, this.phoneNumber, this.role);
      // Implement sign up logic here
    }
    this.close();
  }
}
