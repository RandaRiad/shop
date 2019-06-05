import { AuthService } from './../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
;

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(public service: AuthService) {

  }

  ngOnInit() {
  }
  pand = true;
  toggletrue() {
    this.pand = !this.pand;
  }

  logOut() {
    this.service.logOut();

  }
}
