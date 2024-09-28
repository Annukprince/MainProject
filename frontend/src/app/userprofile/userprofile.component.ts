import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarUserComponent, RouterOutlet],
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user: User | null = null;  // Variable to store the user profile data

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem('user');
    console.log('User data from localStorage:', userData);  // Log the retrieved data

    if (userData) {
      try {
        const users = JSON.parse(userData);  // Parse the user data
        if (Array.isArray(users) && users.length > 0) {
          this.user = users[0];  // Access the first user in the array
          console.log('Parsed user data:', this.user);
        } else {
          console.warn('User data is not in the expected format or is empty.');
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    } else {
      // Handle if no user data is available
      console.warn('No user data found in localStorage.');
    }
  }

}
