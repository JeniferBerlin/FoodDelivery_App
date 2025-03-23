import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminheader',
  standalone: false,
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {
  constructor(    
    private router: Router
  ) {}

  logout() {
   
    // Optional: Clear any local storage/session
    localStorage.clear();

    // Navigate back to Admin Login with Sweet Alert
    this.router.navigate(['/']).then(() => {
      // Optional Sweet Alert message
      Swal.fire({
        icon: 'success',
        title: 'Logged Out',
        text: 'You have been logged out successfully!',
        confirmButtonColor: '#007bff'
      });
    });
  }

}
