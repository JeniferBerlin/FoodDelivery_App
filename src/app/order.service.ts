import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderRequest } from './order-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private api = 'http://localhost:8080'; // adjust if needed

  constructor(private http: HttpClient) {}
  
//placeOrder(userId: number, orderRequest: OrderRequest) {
 // return this.http.post(`${this.api}/order/${userId}`, orderRequest, { responseType: 'text' });
   placeOrder(userId: number,orderData: any): Observable<string> {
    return this.http.post<string>(`${this.api}/order/${userId}`,orderData);
  }
}



    
