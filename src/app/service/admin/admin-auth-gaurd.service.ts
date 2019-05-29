import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';


import { CanActivate,Router } from '@angular/router';
import { UserDatabaseService } from '../user/user-database.service';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService  {
  
  // constructor(private auth:AuthService, private router: Router,private userDataBase:UserDatabaseService) { }
  // canActivate():Observable<boolean> {
  // return this.userDataBase.AppUser$.map(appUser=>appUser.isAdmin);
    
    
  // }
  

//    userIsAdmin$=this.userdatabase.getuser();
//   canActivate() {//check client access by login or no , if yes will  go to all pages else go to login page
  
  
  
//     //  return this.auth.user$.switchMap(user=>{
//   //   return this.userdatabase.getuser(user.uid);
//   //  }).map(appUser=>appUser.isAdmin)
//  this.userIsAdmin$.subscribe(users=>{
//    console.log(this.userIsAdmin$);   
//  })



//     this.userIsAdmin$.map(userAdmin=>{
//       if(userAdmin){
//          userAdmin.filter(admin=>admin["isAdmin"]=true)
//          return true
//       }
//       else {
//         this.router.navigate(['/login']);
//         return false;
//       }
//     })

    
    
//   }
  
  
}
