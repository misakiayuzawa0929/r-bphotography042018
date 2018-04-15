import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../model/Item1';

@Injectable()
export class Services2Service {
  
  itemsCollection: AngularFirestoreCollection<Item>;
  users: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;
  
  constructor(public afs: AngularFirestore) { 
    // this.items = this.afs.collection('items').valueChanges();

    this.itemsCollection = this.afs.collection('users', ref => ref.orderBy('username','asc'));

    this.users = this.itemsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems(){
    return this.users;
  }

  addItem(item: Item){
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item){
    this.itemDoc = this.afs.doc(`users/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Item){
    this.itemDoc = this.afs.doc(`users/${item.id}`);
    this.itemDoc.update(item);
  }
}
