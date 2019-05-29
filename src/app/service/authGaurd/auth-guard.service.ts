import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private service: AuthService, private router: Router) { }

  canActivate() {//check client access by login or no , if yes will  go to all pages else go to login page
    return this.service.user$.pipe(map(
      user => {
        if (user) { return true; }
        else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    ))
  }
}
