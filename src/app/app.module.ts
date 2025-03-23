import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { ViewrestaurantComponent } from './viewrestaurant/viewrestaurant.component';
import { OrderComponent } from './order/order.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminheaderComponent,
    AddmenuComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    EditmenuComponent,
    ViewmenuComponent,
    AdminloginComponent,
    AdminhomeComponent,
    MenuitemComponent,
    AddrestaurantComponent,
    ViewrestaurantComponent,
    OrderComponent,
    HeaderComponent,
    AboutusComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi(),withFetch()),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
