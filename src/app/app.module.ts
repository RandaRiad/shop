import { DataTablesModule } from 'angular-datatables';
import { UserDatabaseService } from './service/user/user-database.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AuthService } from './service/auth/auth.service';
import { AuthGuardService } from './service/authGaurd/auth-guard.service';
import { AdminAuthGaurdService } from './service/admin/admin-auth-gaurd.service';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { CategoryService } from './service/product/category.service';
import {CustomFormsModule} from "ng2-validation";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    OrdersComponent,
    AdminOrdersComponent,
    ProductsComponent,
    LoginComponent,
    AdminProductsComponent,
    ProductNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule,
    DataTablesModule
  ],
  providers: [AuthService,AuthGuardService,UserDatabaseService,AdminAuthGaurdService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
