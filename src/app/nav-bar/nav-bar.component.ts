import { AuthService } from './../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
;

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(private service: AuthService) {

  }

  ngOnInit() {
  }

  logOut() {
    this.service.logOut();

  }
}
