import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable, OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcardService {
 

  constructor(private db: AngularFireDatabase) { }

  createCard() {
    return this.db.list('/shopping-card/').push({ // create card and return key of card
      dataCreate: new Date().getTime()
    })
  }

  async getOrCreateCard() {// check if card already exsist or create one
    let cardId = localStorage.getItem('cardId');
    if (cardId) return cardId;

    let result = await this.createCard();
    localStorage.setItem('cardId', result.key);
    return result.key;
  }
  createItem(cardId: string, productId: string) {//create item with productid
    return this.db.object('/shopping-card/' + cardId + '/items/' + productId);
  
  }

  async  addProductToCard(product) {

    let cardid = await this.getOrCreateCard();
  let  item$ = this.createItem(cardid, product.key);

   item$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
      if (!item.payload.exists()) {

       item$.update({
          product: {
            title: product.payload.val().title,
            price: product.payload.val().price,
            category: product.payload.val().category,
            imageUrl: product.payload.val().imageUrl
          },
          quantity:1
        })
       
      }
      else {
        item$.update({
          quantity: (item.payload.val().quantity) + 1
        })
      }
    })
  }
   cardid;
 async decreaseQaunataty(product){
    this. cardid = await this.getOrCreateCard();
    let  item$ = this.createItem(this.cardid, product.key);
  
     item$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {

          if((item.payload.val().quantity)=== -1){
           this. deleteProduct (item)  ;         
               }else{
            item$.update({
              quantity: (item.payload.val().quantity) -1
            })
          }
          
        })
 }
    

  
async getCardProduct(){ //return  card
  let cardid=await this.getOrCreateCard();
  return this.db.object('/shopping-card/'+cardid);
}
  async getAllProductsInCard(){
    let cardid=await this.getOrCreateCard();
    return this.db.list('/shopping-card/'+cardid+'/items');
  }

  async deleteProduct(item){ 
    let cardid = await this.getOrCreateCard();

    return this.db.object('/shopping-card/' + cardid + '/items/' + item.key).remove();

  }
}
