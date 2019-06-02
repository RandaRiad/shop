import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewproductService } from '../service/newproduct/newproduct.service';
import { CategoryService } from '../service/product/category.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ShoppingcardService } from '../service/card/shoppingcard.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  allProduct: any[];
  allCategory$;
  productsByCategory: any[];

  subscribe1: Subscription;
  constructor(private product: NewproductService, private category: CategoryService, private card: ShoppingcardService) {

    this.subscribe1 = this.product.getProduct().subscribe(products => {
    this.allProduct = products;

      this.productsByCategory = this.allProduct;// to load all products automatic
    })

    this.allCategory$ = this.category.getProductCategory();

  }

  filterProductbyCategory(categoryName) {
    if (categoryName) {
      this.productsByCategory = this.allProduct.filter(p => p.payload.val().category === categoryName);
    }
  }

  addCardAndQauantaty(product) {//for card in database if product exsist will increase qauntaty
    this.card.addProductToCard(product);
  }
  getAllProductByButtonCategory() {//to load all product when click button all product
    this.productsByCategory = this.allProduct;

  }
  cart: any;//contain all products that in card
  async ngOnInit() {
    this.subscribe1 = (await this.card.getCardProduct()).valueChanges().subscribe(cart => {
    this.cart = cart;
    })//return all product in the card in database
  }
   ;
  getQauntaty(product) {// reuturn qauntati of card item
    if (!this.cart || this.cart==null ) {
       return 0 
      }

      
      else{
          let item = this.cart.items[product.key];
            return item ? item.quantity : 0
      }
  }
  decreaseQauntaty(productQauantaty){
    this.card.decreaseQaunataty(productQauantaty);
  }

  ngOnDestroy(): void {
    this.subscribe1.unsubscribe();
  }
}
