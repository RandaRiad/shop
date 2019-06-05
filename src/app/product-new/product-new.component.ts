import { CategoryService } from './../service/product/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { NewproductService } from '../service/newproduct/newproduct.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  categoryProduct$;
  productById;
  productID: string;

  constructor(private categ: CategoryService,
    private newProduct: NewproductService,
    private router: Router,
    private activeRoute: ActivatedRoute) {

    this.categoryProduct$ = categ.getProductCategory();

    this.productID = this.activeRoute.snapshot.paramMap.get('id')//to ruturn product key in database from url when user click edit from products.component.html
    if (this.productID) {
      this.newProduct.getProductById(this.productID).subscribe(productID => this.productById = productID);// take rturn product and put it in variable 


    }

  }

  form  : FormGroup ;
  title:FormControl;
  price:FormControl;
  imageUrl:FormControl;
  category:FormControl;
  ngOnInit() {
    
    this.form = new FormGroup({
    //  title: new FormControl("", Validators.required),
      price: new FormControl("", [CustomValidators.min(0), Validators.required]),

      imageUrl: new FormControl("", [CustomValidators.url, Validators.required]),
      category: new FormControl("", Validators.required),

    });
  }
 

  saveAndUpdate(product) {
    if (this.productID) {
      this.newProduct.updateProduct(this.productID, product)
    }
    else {
      this.newProduct.createNewProduct(product);

    }
    this.router.navigate(['/products']);
  }

  delete() {
    if (confirm("Are you sure to Delete this Product")) {
      this.newProduct.deleteProduct(this.productID);
    }
    this.router.navigate(['/products']);

  }
}