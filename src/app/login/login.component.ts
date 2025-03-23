import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRequest = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Function to handle login
  onSubmit(): void 
  {
    // Validate inputs
    if (!this.loginRequest.email || !this.loginRequest.password)
     {
      Swal.fire('Error', 'Please fill in all fields', 'error');
      return;
    }
  
 // Clear error messages and make HTTP POST request
 this.http.post('http://localhost:8080/login', this.loginRequest, { responseType: 'text' })
 .subscribe({
   next: (response) => {
     console.log(response);
     // Show success alert
     Swal.fire('Success', 'Login successful!', 'success').then(() => {
       // Navigate to the home page
       this.router.navigate(['/']);
     });
   },
   error: (err) => {
     console.error(err);
     // Show error alerts based on status
     if (err.status === 401) {
       Swal.fire('Error', 'Invalid email or password', 'error');
     } else {
       Swal.fire('Error', 'An error occurred. Please try again later.', 'error');
     }
   }
 });
}

}
