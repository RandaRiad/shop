import { NewproductService } from './../service/newproduct/newproduct.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy {
 

  getProducts:any[];
  // getProducts$
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private product: NewproductService) {
    this.product.getProduct().subscribe(p=>{//change type of observable that return by getProduct to array
      this.getProducts=p,
this.dtTrigger.next();//this for table in the page html

    })
    // this.getProducts$= this.product.getProduct();
    // this.dtTrigger.next();//this for table in the page html


  }

  ngOnInit() {
    this.dtOptions = {// these for next and previuse for page
      pagingType: 'full_numbers',
      pageLength: 4
  }
  }

  ngOnDestroy(): void {// Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
