import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user={
    name: '',
    email: '',
    password: '',
    mobileno: '',
    address: ''
  };
  constructor(private http: HttpClient, private router: Router) {}
 
 
  register() {
   this.http.post('http://localhost:8080/register', this.user).subscribe(
     (response: any) => {
       Swal.fire('Success', 'Registration successful! Please log in.', 'success').then(() => {
         // Navigate to login page after successful registration
         this.router.navigate(['/login']);
       });
     },
     (error) => {
       Swal.fire('Error', 'User already exists or invalid input!', 'error');
     }
   );
 }

}
