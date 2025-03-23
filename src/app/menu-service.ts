import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private api = 'Http://localhost:8080';
    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<Menu> {
      const loginRequest = { email,password };
      return this.http.post<Menu>(`${this.api}/login`, loginRequest)
    }

    saveMenu(menuData: any): Observable<any> { 
      return this.http.post(`${this.api}/save/menu`, menuData); }
    
      //Fetch all MenuItems
      getMenu(): Observable<Menu[]> {
        return this.http.get<Menu[]>(`${this.api}/get/menu`);
      }
    
      //Update an existing MenuItem
      updateMenus(menuItem: any): Observable<any> {
        return this.http.put(`${this.api}/update/menu`,menuItem);
      }
    
    
      //Delete a MenuItem by ID
       public deleteMenu(id: number) {
        return this.http.delete(`${this.api}/delete/menu/${id}`);
      }
}
