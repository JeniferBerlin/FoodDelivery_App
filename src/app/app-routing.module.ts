import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { OrderComponent } from './order/order.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { ViewrestaurantComponent } from './viewrestaurant/viewrestaurant.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'addmenu',component:AddmenuComponent},
  { path: 'viewmenu',component:ViewmenuComponent },
  { path: 'editmenu',component:EditmenuComponent},
  { path: 'register',component:RegisterComponent},
  { path: 'login',component: LoginComponent},
  { path: 'menuitem',component: MenuitemComponent},
  { path: 'order',component: OrderComponent},
  { path: 'adminlogin',component: AdminloginComponent},
  { path :'adminhome',component: AdminhomeComponent},
  { path: 'addrestaurant',component:AddrestaurantComponent},
  { path: 'viewrestaurant',component: ViewrestaurantComponent},
  { path: 'aboutus',component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
