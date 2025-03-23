import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu-service';

@Component({
  selector: 'app-viewmenu',
  standalone: false,
  templateUrl: './viewmenu.component.html',
  styleUrl: './viewmenu.component.css'
})
export class ViewmenuComponent implements OnInit{
  menuItems: Menu[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.loadMenuItems();
  }

  loadMenuItems(): void {
    this.menuService.getMenu().subscribe((data) => {
      this.menuItems = data;
    });
  }

}
