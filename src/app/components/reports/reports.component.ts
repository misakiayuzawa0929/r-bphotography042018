import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from '../../auth.service';
import { Item1 } from '../../model/Item3';
import { Services3Service } from '../../service2/services3.service';
import { AngularFireDatabaseModule, AngularFireDatabaseProvider } from 'angularfire2/database';
import { Services2Service } from '../../services/services2.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  email: string;
  password: string;

  reports: Item1[];
  editState: boolean = false;
  itemToEdit: Item1;

  constructor(public authService: AuthService, private itemService: Services3Service, private router: Router) { }

  ngOnInit() {
      this.itemService.getItems().subscribe(reports => {
      // console.log(items);
      this.reports = reports;
    });
  }

  deleteItem(event, item: Item1){
      this.itemService.deleteItem(item);
      this.clearState();
  }

  editItem(event, item: Item1){
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item1){
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
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
  homeClick(){
    this.router.navigate(['/home']);
  }
  aboutClick(){
    this.router.navigate(['/about']);
  }
  ordersClick(){
    this.router.navigate(['/orders']);
  }
  logoutClick(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
