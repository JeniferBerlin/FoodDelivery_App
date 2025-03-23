import { Component } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu-service';
import Swal from 'sweetalert2';
import { RestaurantService } from '../restaurant.service';



@Component({
  selector: 'app-editmenu',
  standalone: false,
  templateUrl: './editmenu.component.html',
  styleUrl: './editmenu.component.css'
})
export class EditmenuComponent {
  menuItems: Menu[] = [];
  updateMenu: Menu | null = null;

  constructor(private menuService: MenuService,private restaurantService: RestaurantService) {
    this.loadMenuItems();
  }

  loadMenuItems(): void {
    this.menuService.getMenu().subscribe((data) => {
      this.menuItems = data;
    });
  }

  editMenu(menu: Menu): void {
    this.updateMenu = { ...menu,
      restaurant: menu.restaurant? {...menu.restaurant} : { id:0, name: '', address: ''}
     }; // Create a copy for editing
  }

  saveMenu(): void {
    if (this.updateMenu) {
      this.menuService.updateMenus(this.updateMenu).subscribe(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Menu Item Updated Successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.loadMenuItems(); // Refresh the menu list
        this.cancelEdit(); // Reset the updateMenu
      },() => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to Update Menu Item!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
    });
    }
  }

  deleteMenu(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this menu item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {        
    this.menuService.deleteMenu(id).subscribe(() => {
      Swal.fire({
        title: 'Deleted!',
        text: 'Menu Item has been deleted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.loadMenuItems();
    },() => {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to Delete Menu Item!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      });
  }
});
  }
  cancelEdit(): void {
    this.updateMenu = null;
  }
 
  }

 
