import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item1 } from '../model/Item3';

@Injectable()
export class Services3Service {
  itemsCollection: AngularFirestoreCollection<Item1>;
  reports: Observable<Item1[]>;
  itemDoc: AngularFirestoreDocument<Item1>;

  constructor(public afs: AngularFirestore) { 
    // this.items = this.afs.collection('items').valueChanges();

    this.itemsCollection = this.afs.collection('reports', ref => ref.orderBy('type','asc'));

    this.reports = this.itemsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item1;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems(){
    return this.reports;
  }

  addItem(item: Item1){
    this.itemsCollection.add(item);
  }

  deleteItem(item1: Item1){
    this.itemDoc = this.afs.doc(`reports/${item1.id}`);
    this.itemDoc.delete();
  }

  updateItem(item1: Item1){
    this.itemDoc = this.afs.doc(`reports/${item1.id}`);
    this.itemDoc.update(item1);
  }
}
