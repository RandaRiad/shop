import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingcardService } from '../service/card/shoppingcard.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit, OnDestroy  {
  

  subscribe1: Subscription;
  form: FormGroup;
  constructor(public card: ShoppingcardService) {
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
   (await this.card.getAllProductsInCard()).snapshotChanges().pipe(take(1)).subscribe(cart => {
      this.cart = cart;

    })     //return all product in the card in database
  }

  delete(item) {
    if (confirm("Are you sure to Delete this Product")) {
      this.card.deleteProduct(item);
    }}
  totalProductsPrice : number=0 ;

   totalPrice() {
     if(this.totalProductsPrice==0){
    for (let items of this.cart as any) {
     
        let qauantaty = items.payload.val().quantity;
        let price = items.payload.val().product.price as number;

        let productPrice = qauantaty * price;

       this.totalProductsPrice+=productPrice;
      
    }
    
      return this.totalProductsPrice as number;
  }
  else{
    return this.totalProductsPrice=0;

    
  }
    
    
  
    }
   
 

 
   
  ngOnDestroy(): void {
    // this.subscribe1.unsubscribe();
  }
}
