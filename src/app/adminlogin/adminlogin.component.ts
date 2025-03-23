import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MenuService } from '../menu-service';
import { Menu } from '../menu';

@Component({
  selector: 'app-adminlogin',
  standalone: false,
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private router: Router,private menuService: MenuService){}
  menuItem: Menu[] =[];

  loginReq = {
    email: '',
    password: ''
  };
  email: string = '';
  password: string = '';
  message: string = '';

  adminUsername: string = 'admin';
  adminPassword: string = '637485';

  OnLogin() {
    // Check for Admin credentials
   if (this.email===this.adminUsername && this.password===this.adminPassword ) {
   
    Swal.fire({
      title: 'Admin Login Successful!',
      text: 'Welcome Admin!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    this.router.navigateByUrl('/adminhome'); // Navigate to admin dashboard
    return;
  }
  this.menuService.login(this.email, this.password).subscribe({
    next: (response) => {
      // If login is successful, save employee data
      this.menuService.saveMenu(response);
      Swal.fire({
        title: 'Login Successful!',
        text: `Welcome, ${response.name}`,
        icon: 'success',
        confirmButtonText: 'OK',
      });
      this.router.navigateByUrl('/'); // Navigate to dashboard
    },
    error: (error) => {
      // Handle login error (invalid credentials)
      Swal.fire({
        title: 'Invalid Login!',
        text: 'Invalid email or password. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    },
  });
  }
 
  


}
