import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../model/Item';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  products: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(public authService: AuthService, private itemService: ItemService, private router: Router) { }

  ngOnInit() {
      this.itemService.getItems().subscribe(products => {
      // console.log(items);
      this.products = products;
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
  imageClick(){
    this.router.navigate(['/file']);
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
