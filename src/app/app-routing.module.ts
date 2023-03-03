import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictsComponent } from 'src/app/page/districts/districts.component';
import { LoginComponent } from './page/login/login.component';
import { SinglePageComponent } from './page/single-page/single-page.component';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { FooterComponent } from './unit/footer/footer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',component:DistrictsComponent},
  {path:'login',component:LoginComponent},
  {path:'single-page',component:SinglePageComponent},
  {path: 'navbar',component:NavbarComponent},
  { path : 'footer',component:FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
