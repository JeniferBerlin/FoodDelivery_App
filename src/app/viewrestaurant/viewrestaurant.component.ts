import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-viewrestaurant',
  standalone: false,
  templateUrl: './viewrestaurant.component.html',
  styleUrl: './viewrestaurant.component.css'
})
export class ViewrestaurantComponent implements OnInit{
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurant().subscribe(
      (data) => {
        this.restaurants = data;
        console.log('Fetched Restaurants',data);
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }

}
