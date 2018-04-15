import { Component, OnInit } from '@angular/core';
import { Services1Service } from '../../services1/services1.service';
import { Item } from '../../model/Item';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-items1',
  templateUrl: './items1.component.html',
  styleUrls: ['./items1.component.css']
})
export class Items1Component implements OnInit {
  
  packages: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(public authService: AuthService, private itemService: Services1Service, private router: Router) { }

  ngOnInit() {
      this.itemService.getItems().subscribe(packages => {
      // console.log(items);
      this.packages = packages;
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

  updateItem(item: Item){
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
  reportClick(){
    this.router.navigate(['/reports']);
  }
  logoutClick(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
