import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UserDatabaseService {
  constructor(private db:AngularFireDatabase) { }

  save(user:firebase.User){// to save any user 
  
    this.db.object('/users/'+user.uid).update({
      name:user.displayName,
      email:user.email,
      isAdmin :user.email=="eng.randariad14@gmail.com"? true:false
    })
  }

  //  getUser(uid):AngularFireObject<AppUser>{
  //    return this.db.object('/users/'+uid);
  // // return  users by id and we must implement interface for this user to store these user
 }
//  get AppUser$():Observable<AppUser>{
//    return  this.auth.user$
//   .switchMap(user=> this.getUser(user.uid))}
 
  
  
