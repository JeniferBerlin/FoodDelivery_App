import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-addrestaurant',
  standalone: false,
  templateUrl: './addrestaurant.component.html',
  styleUrl: './addrestaurant.component.css'
})
export class AddrestaurantComponent {
  restaurant = {
    id: 0,
    name: '',
    address: ''
  };

  constructor(private restaurantService: RestaurantService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    this.restaurantService.saveRestaurant(this.restaurant).subscribe({
      next: () => {
        Swal.fire({
          title: 'Success!',
          text: 'Restaurant Added Successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        form.resetForm(); // Reset form after success
      },
      error: () => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to Add Restaurant!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }

}
