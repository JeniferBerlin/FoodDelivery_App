import { Component } from '@angular/core';
import { MenuService } from '../menu-service';
import { Menu } from '../menu';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'; // Import SweetAlert2 for popups
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  standalone: false,
  templateUrl: './addmenu.component.html',
  styleUrl: './addmenu.component.css'

})
export class AddmenuComponent {
  menuItem = {
    Id: 0,
    name: '',
    price: 0,
    restaurant: { Id: 0, name: '', address: ''}
  };

  constructor(private menuService: MenuService, private router: Router) {}

  onSubmit(form: NgForm) {
    this.menuService.saveMenu(this.menuItem).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'Success!',
          text: 'Menu Item Added Successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Navigate to Admin Home after clicking OK
          this.router.navigate(['/adminhome']);
        });
         // Reset the form
         form.resetForm();
        //this.menuItem = { Id: 0,name: '', price: 0, restaurant: {Id: 0, name: '', address: ''} }; // Reset form
      },
      error: (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to Add Menu Item!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }

}
