import { Component } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { OnInit } from '@angular/core';

interface UserProfile {
  fullName: string;
}
@Component({
  selector: 'app-user-main-page',
  standalone: true,
  imports: [NavbarUserComponent, RouterLink,RouterOutlet],
  templateUrl: './user-main-page.component.html',
  styleUrl: './user-main-page.component.css'
})
export class UserMainPageComponent implements OnInit{

  // username: string = 'User';

  weakPrint: number = 0;

  username: string = ''; // Variable to store the username

  userProfile: UserProfile = {
    fullName: ''
  };

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    // Safely parse and access the stored user data from localStorage
    const userData = localStorage.getItem("user");
    console.log('User data from localStorage:', userData); // Log the retrieved data

    if (userData) {
      try {
        const users = JSON.parse(userData);  // Parse the user data
        if (Array.isArray(users) && users.length > 0) {
          const user = users[0]; // Get the first user from the array
          this.userProfile.fullName = `${user.firstName} ${user.lastName}`; // Set fullName
          this.username = user.firstName; // Set the username for the welcome message
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
