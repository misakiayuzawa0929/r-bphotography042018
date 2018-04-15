import { Component, OnInit } from '@angular/core';
import { Services2Service } from '../../services/services2.service';
import { Item } from '../../model/Item1';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from '../../auth.service';
import { AngularFireDatabaseModule, AngularFireDatabaseProvider } from 'angularfire2/database';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    
  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) {

  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  // login() {
  //   this.authService.login(this.email, this.password);
  //   this.email = this.password = '';    
  // }

  ngOnInit() {
  }

  imageClick(){
    this.router.navigate(['/file']);
  }
  productClick(){
    this.router.navigate(['/items']);
  }
  packageClick(){
    this.router.navigate(['/items1']);
  }
  homeClick(){
    this.router.navigate(['/home']);
  }
  aboutClick(){
    this.router.navigate(['/about']);
  }
  ordersClick(){
    this.router.navigate(['/orders']);
  }
  reportClick(){
    this.router.navigate(['/reports']);
  }
  logoutClick(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
