import { Component, OnInit } from '@angular/core';
import { Services1Service } from '../../services1/services1.service';
import { Item } from '../../model/Item'; 

@Component({
  selector: 'app-add-item1',
  templateUrl: './add-item1.component.html',
  styleUrls: ['./add-item1.component.css']
})
  export class AddItem1Component implements OnInit {
    item: Item = {
      type: '',
      description: '',
      price: ''
    }

    constructor(private itemService: Services1Service) { }

    ngOnInit() {
    }

    onSubmit(){
        if(this.item.type != '' && this.item.description != '' && this.item.price != ''){
        this.itemService.addItem(this.item);
        this.item.type = '';      
        this.item.description = '';
        this.item.price = '';      
      }
    }
}
