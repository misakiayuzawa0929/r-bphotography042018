import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../model/Item'; 

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  item: Item = {
    type: '',
    description: '',
    price: ''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() 
  {
  }

  onSubmit()
  {
    if(this.item.type != '' && this.item.description != '' && this.item.price != '')
    {
      this.itemService.addItem(this.item);
      this.item.type = '';      
      this.item.description = '';
      this.item.price = '';      
    }
  }
}