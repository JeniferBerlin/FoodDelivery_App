import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
   private api = 'Http://localhost:8080';
       constructor(private http: HttpClient) { }

       
   saveRestaurant(restaurantData: any): Observable<any> { 
         return this.http.post(`${this.api}/save/restaurant`, restaurantData); }
       
         //Fetch all Restaurants
         getRestaurant(): Observable<Restaurant[]> {
           return this.http.get<Restaurant[]>(`${this.api}/get/restaurant`);
         }

         getRestaurantById(id: number): Observable<Restaurant> {
          return this.http.get<Restaurant>(`${this.api}/get/restaurant${id}`);
        }
  
}
