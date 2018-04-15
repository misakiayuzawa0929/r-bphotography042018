import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabaseModule, AngularFireDatabaseProvider } from 'angularfire2/database';
import { Router } from '@angular/router';
import { routes } from '../app.routes';
// import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [moveIn()],
  // host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) {

  }

  // signup() {
  //   this.authService.signup(this.email, this.password);
  //   this.email = this.password = '';
  // }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }
  
  home(){
    this.router.navigate(['/home']);
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }


  ngOnInit() {
  }

}
