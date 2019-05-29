import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewproductService {

  constructor( private db:AngularFireDatabase) { }

  createNewProduct(product){
    this.db.list('/products/').push(product);
  }
  getProduct(){
    return this.db.list('/products/').snapshotChanges();// return all products with keys and all data

  }
  getProductById(productID){
    return this.db.object('/products/'+ productID).valueChanges()//rutern product by id and  use object when return one object if return more product you can use list and use valuechange to rutrun data only not key

  }
  updateProduct(productId,product){
    this.db.object('/products/'+ productId).update(product);
  }
  deleteProduct(productId){
    this.db.object('/products/'+ productId).remove();

  }
}
