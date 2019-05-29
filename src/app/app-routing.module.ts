import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AuthGuardService } from './service/authGaurd/auth-guard.service';

import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { AdminAuthGaurdService } from './service/admin/admin-auth-gaurd.service';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'orders',component:OrdersComponent,canActivate:[AuthGuardService]},
  // {path:'orders',component:AdminOrdersComponent,canActivate:[AuthGuardService]},
  // {path:'products',component:AdminProductsComponent,canActivate:[AuthGuardService]},
  {path:'products/new',component:ProductNewComponent,canActivate:[AuthGuardService]},
  {path:'products/new/:id',component:ProductNewComponent,canActivate:[AuthGuardService]},

  {path:'products',component:ProductsComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
