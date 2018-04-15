import { Component, OnInit } from '@angular/core';
import { Services2Service } from '../../services/services2.service';
import { Item } from '../../model/Item1'; 

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  item: Item = {
    username: '',
    password: '',
    email: ''
  }

  constructor(private itemService: Services2Service) { }

  ngOnInit() 
  {
  }

  onSubmit()
  {
    if(this.item.username != '' && this.item.password != '' && this.item.email != '')
    {
      this.itemService.addItem(this.item);
      this.item.username = '';      
      this.item.password = '';
      this.item.email = '';      
    }
  }

}
