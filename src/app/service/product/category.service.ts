import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private db:AngularFireDatabase) { }

  getProductCategory(){
    return this.db.list('/categories/').valueChanges();// return all categories of product
  }
  
  getProductByCategoryName(category){
    return this.db.list('/products/'+ category).snapshotChanges()//rutern product by Category name and  use object when return one object if return more product you can use list and use valuechange to rutrun data only not key

  }
}
