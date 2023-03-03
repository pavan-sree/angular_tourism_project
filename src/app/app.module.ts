import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictsComponent } from './page/districts/districts.component';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { FooterComponent } from './unit/footer/footer.component';
import { LoginComponent } from './page/login/login.component';
import { SinglePageComponent } from './page/single-page/single-page.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    DistrictsComponent,
    NavbarComponent,
    FooterComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
