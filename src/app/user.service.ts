
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = 'http://localhost:8080'; // Replace with actual backend URL

  constructor(private http: HttpClient) {}

  public getUser(id?: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }
  
}
  

  //logout() {
   // this.currentUser = null;
   // localStorage.removeItem("currentUser");
 // }
  
 


  

