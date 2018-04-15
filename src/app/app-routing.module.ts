import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { HomeComponent } from './components/home/home.component';
import { Items1Component } from './components/items1/items1.component';
import { AccountComponent } from './components/account/account.component';
import { FileComponent } from './components/file/file.component';

const routes: Routes = [
  
	{
		path: "product/:id",
		component: ItemsComponent
	},
	{
		path: "product1/:id",
		component: Items1Component
	},
	{
		path: "file/:id",
		component: FileComponent
	},
	{
		path: "account/:id",
		component: AccountComponent
	},
	{
		path: "",
		component: HomeComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
