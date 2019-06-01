import { AuthGuardService } from './service/authGaurd/auth-guard.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  
  {path:'products/new',component:ProductNewComponent,canActivate:[AuthGuardService]},
  {path:'products/new/:id',component:ProductNewComponent,canActivate:[AuthGuardService]},

  {path:'products',component:ProductsComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'shoppingCart',component:ShoppingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
