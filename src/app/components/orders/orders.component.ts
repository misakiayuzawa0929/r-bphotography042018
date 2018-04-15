import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../service2/services.service';
import { Services3Service } from '../../service2/services3.service';
import { Item } from '../../model/Item2';
import { Item1 } from '../../model/Item3';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from '../../auth.service';
import { AngularFireDatabaseModule, AngularFireDatabaseProvider } from 'angularfire2/database';
// import { MessagingService } from "../../messaging.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})

export class OrdersComponent implements OnInit {
  
  email: string;
  password: string;

  orders: Item[];
  reports: Item1[];  
  editState: boolean = false;
  itemToEdit: Item;
  // message;

  constructor(
    // private msgService: MessagingService, 
    public authService: AuthService, private itemService: ServicesService, private itemService1: Services3Service, private router: Router) { }

  ngOnInit() {
    // this.msgService.getPermission()
    // this.msgService.receiveMessage()
    // this.message = this.msgService.currentMessage
    
      this.itemService.getItems().subscribe(orders => {
      // console.log(items);
      this.orders = orders;
    });
  }

  deleteItem(event, item: Item){
      this.itemService.deleteItem(item);     
      this.clearState();
  }
  editItem(event, item: Item){
    this.editState = true;
    this.itemToEdit = item;
  }

  add(event, item: Item1){
    this.itemService1.addItem(item);
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
  reportClick(){
    this.router.navigate(['/reports']);
  }
  logoutClick(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
