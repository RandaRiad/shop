import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private servics:AuthService) { }

  ngOnInit() {
  }


  login(){
this.servics.login();
  }
}
