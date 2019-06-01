import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingcardService } from '../service/card/shoppingcard.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit, OnDestroy  {
  

  subscribe1: Subscription;
  form: FormGroup;
  constructor(private card: ShoppingcardService) {
    this.form = new FormGroup({
      title: new FormControl("", Validators.required),
      last: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      Country: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      zip: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      card: new FormControl("", Validators.required),
      expiration: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      cvv: new FormControl("", Validators.required),
    });
   }

  cart:any[]=[];      //contain all products that in card
  async ngOnInit() {
    this.subscribe1 = (await this.card.getAllProductsInCard()).valueChanges().subscribe(cart => {
      this.cart = cart;

    })     //return all product in the card in database
  }


  productPrice;
  totalProductsPrice=0 ;

  totalPrice() {
    for (let items of this.cart as any) {
      let qauantaty = items.quantity;
      let price = items.product.price as number;
      this.productPrice = qauantaty * price;
     this.totalProductsPrice+=this.productPrice;
    }
    
    return this.totalProductsPrice;
    

   }
 
  ngOnDestroy(): void {
    this.subscribe1.unsubscribe();
  }
}
