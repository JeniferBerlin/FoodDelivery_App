import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuitem',
  standalone: false,
  templateUrl: './menuitem.component.html',
  styleUrl: './menuitem.component.css'
})
export class MenuitemComponent implements OnInit {
  menuItems: Menu[] = [];
  
    constructor(private router: Router, private menuService: MenuService) {}
  
    ngOnInit(): void {
      this.loadMenuItems();
    }
  
    loadMenuItems(): void {
      this.menuService.getMenu().subscribe((data) => {
        this.menuItems = data;
      },
    (error) => {
      console.error('Error in fetching menu items:',error);
    }
    );
    }
    orderFood(menu: any) {
      this.router.navigate(['/order'],
        { queryParams: { 
          foodId: menu.id,
           food: menu.name,
           price: menu.price, 
           restaurantName: menu.restaurant?.name, 
           restaurantAddress: menu.restaurant?.address
            }});
    }
  

}
