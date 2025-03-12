import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AddmenuComponent } from './addmenu/addmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminheaderComponent,
    AddmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
