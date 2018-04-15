import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  accountClick(){
    this.router.navigate(['/account']);
  }
  productClick(){
    this.router.navigate(['/items']);
  }
  packageClick(){
    this.router.navigate(['/items1']);
  }
  imageClick(){
    this.router.navigate(['/file']);
  }
  aboutClick(){
    this.router.navigate(['/about']);
  }
  ordersClick(){
    this.router.navigate(['/orders']);
  }
  reportsClick(){
    this.router.navigate(['/reports']);
  }
  logoutClick(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
