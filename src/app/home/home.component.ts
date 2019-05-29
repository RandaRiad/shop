import { ShoppingCardService } from './../service/shoppingcard/shopping-card.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewproductService } from '../service/newproduct/newproduct.service';
import { CategoryService } from '../service/product/category.service';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{
  

  allProduct:any[];
  allCategory$;
  productsByCategory:any[];

  subscribe1:Subscription;
  constructor(private product: NewproductService, private category: CategoryService,private shoppingcard:ShoppingCardService) {

     this.subscribe1=this.product.getProduct().subscribe(products=>
      {this.allProduct=products;
      this.productsByCategory=this.allProduct;
      })

    this.allCategory$ = this.category.getProductCategory();

  }

  ngOnInit() {
  }

  

  filterProductbyCategory(categoryName) {
    if(categoryName){    
      this.productsByCategory=this.allProduct.filter(p=>p.payload.val().category===categoryName);
    }
  }

  getAllProductByButtonCategory(){
    this.productsByCategory=this.allProduct;

  }
  addCard(product){
this.shoppingcard.addProductToCard(product);
  } 
  
  
  ngOnDestroy(): void {
this.subscribe1.unsubscribe();  }
}
