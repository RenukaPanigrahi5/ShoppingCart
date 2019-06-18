import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipsComponent } from './receips/receips.component';
import { ReceipesListComponent } from './receips/receipes-list/receipes-list.component';
import { ReceipesDetailComponent } from './receips/receipes-detail/receipes-detail.component';
import { ReceipesItemComponent } from './receips/receipes-list/receipes-item/receipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipsComponent,
    ReceipesListComponent,
    ReceipesDetailComponent,
    ReceipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
