import { Component, OnInit } from '@angular/core';
import { OrderRequest } from '../order-request';
import Swal from 'sweetalert2';
import { Menu } from '../menu';
import { MenuService } from '../menu-service';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';
import { MenuitemComponent } from '../menuitem/menuitem.component';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  user: any;
  menuItems: Menu[] = [];
  selectedItemIds: number[] = [];
  totalPrice: number = 0;
  paymentMethod: string = '';

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private menuService: MenuService
  ) {}
  ngOnInit() {
    this.getUserDetails();
    this.fetchMenuItems();
  }

  getUserDetails() {
    this.userService.getUser(this.user?.id).subscribe((data: any) => {
      this.user = data;
    });
  }
  fetchMenuItems() {
    this.menuService.getMenu().subscribe({
      next: (data) => {
        this.menuItems = data;
      },
      error: () => {
        Swal.fire('Error', 'Failed to fetch menu items', 'error');
      }
    });
  }

  onItemSelect(event: any) {
    const id = +event.target.value;
    //const item = this.menuItems.find(i => i.id === itemId);

    if (event.target.checked) {
      this.selectedItemIds.push(id);
    } else {
      this.selectedItemIds = this.selectedItemIds.filter(itemId => itemId !== id);
    }

    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.menuItems
      .filter(item => this.selectedItemIds.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);
    //this.totalPrice = this.selectedItems.reduce((sum, item) => sum + item.price, 0);
  }

  placeOrder() {
    if (!this.paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    const orderData = {
      userId: this.user?.id,
      menuItemsIds: this.selectedItemIds,
      totalPrice: this.totalPrice,
      paymentMethod: this.paymentMethod
    };

    

    this.orderService.placeOrder(this.user?.id, orderData).subscribe({
      next: () => {
        Swal.fire('Success', 'Order placed successfully!', 'success');
      },
      error: () => {
        Swal.fire('Error', 'Failed to place order', 'error');
      }
    });
  }

  


}
