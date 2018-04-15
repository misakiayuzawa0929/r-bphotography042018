import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import * as firebase from 'firebase';

import { AngularFire } from 'firestore';

import { AppComponent } from './app.component';

import { ItemService } from './services/item.service';
import { Services1Service } from './services1/services1.service';
import { Services2Service } from './services/services2.service';
import { ServicesService } from './service2/services.service';
import { Services3Service } from './service2/services3.service';
import { DisplayfileService } from './display/displayfile.service';

import { AddItemComponent } from './components/add-item/add-item.component';
import { AddItem1Component } from './components/add-item1/add-item1.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { Items1Component } from './components/items1/items1.component';
import { AccountComponent } from './components/account/account.component';
import { FileComponent } from './components/file/file.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routes';

import { AuthService } from './auth.service';


import { DropZoneDirective } from './drop-zone.directive';
import { OrdersComponent } from './components/orders/orders.component';
import { ReportsComponent } from './components/reports/reports.component';
import { MessagingService } from "./messaging.service";


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddItemComponent,
    HomeComponent,
    Items1Component,
    AddItem1Component,
    AccountComponent,
    AddUsersComponent,
    FileComponent,
    LoginComponent,
    DropZoneDirective,
    OrdersComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpModule,
    routes,
    ReactiveFormsModule
  ],
  providers: [MessagingService, ItemService, Services1Service, Services2Service, AuthService, ServicesService, Services3Service, DisplayfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
