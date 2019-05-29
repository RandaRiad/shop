import { UserDatabaseService } from './../user/user-database.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;    //firebase have already class of user

  constructor(private af: AngularFireAuth, private userServis:UserDatabaseService) {
    this.user$ = af.authState;       // $ to know programer this vaiable is observable
   
      this.user$.subscribe(user=>{      // to save user in firbase
        if(user){
          this.userServis.save(user);
        }
      })
    
  }

  logOut() {
    this.af.auth.signOut();
  }

  login() {
    this.af.auth.signInWithRedirect(new auth.GoogleAuthProvider());

  }
}
