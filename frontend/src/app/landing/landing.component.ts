import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginSignupModalComponent } from '../login-signup-modal/login-signup-modal.component';
// import { LoginSignupModalComponent } from '../login-signup-modal/login-signup-modal.component';
// import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule , LoginSignupModalComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  showLoginModal = false;

  constructor(private router:Router){}

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

  hanndleClick() {
    this.router.navigate(['/login'])
  }

}