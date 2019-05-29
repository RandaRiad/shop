import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService implements OnDestroy  {
  

  subscribe:Subscription;
  constructor(private db: AngularFireDatabase) { }

  createCard() {    //create card for user with key
    return this.db.list("/shopping-card/").push({
      dataCreat: new Date().getTime()
    })
  }


  private async getOrCreatCardId() {// make sure if card already created or need to creat
    let cardId = localStorage.getItem('cardId');
    if (cardId) return cardId;

    let result = await this.createCard();//await to let application didnt exceute this line and under if the two lines befor it false
    localStorage.setItem('cardId', result.key);
    return result.key;
  }
  getItemOfPorduct(cardId, productId) {
    // get product that user choose it and put it in card 

    return this.db.object('/shopping-card/' + cardId + '/items/' + productId);

  }
  async addProductToCard(product) {
    let cardid = await this.getOrCreatCardId();// not execute any thing of lines under that if it execute
    let item$ = this.getItemOfPorduct(cardid, product.key);

     this.subscribe=item$.snapshotChanges().
     subscribe((item: any) => {
      if (item.payload.exists()) {
        console.log('perfect')
        item$.update({
          quantity: item.payload.val().quantity + 1
        });
      }
      else {
        item$.update({
          product: {
            title: product.payload.val().title,
            price: product.payload.val().price,
            category: product.payload.val().category,
            imageUrl: product.payload.val().imageUrl
          },quantity:1
        });

      }
    })
  }
 
  ngOnDestroy(): void {
this.subscribe.unsubscribe();  }

}
