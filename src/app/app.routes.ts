import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { Items1Component } from './components/items1/items1.component';
import { AccountComponent } from './components/account/account.component';
import { FileComponent } from './components/file/file.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ReportsComponent } from './components/reports/reports.component';
// import { MessagesComponent } from './components/reports/reports.component';

export const router: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'items', component: ItemsComponent
    },
    {
        path: 'items1', component: Items1Component
    },
    {
        path: 'account', component: AccountComponent
    },
    {
        path: 'file', component: FileComponent
    },
    {
        path: 'orders', component: OrdersComponent
    },
    {
        path: 'reports', component: ReportsComponent
    }
    // {
    //     path: 'messages', component: MessagesComponent
    // },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
