import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { DatabaseService } from './services/database.service';
import { HomeComponent } from './home/home.component';
import { ApiService } from './api.service';
import {DisplayProductsComponent} from "./display-products/display-products.component"

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProductsComponent,
    AboutComponent,
    HomeComponent,
    DisplayProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ HttpClient, ApiService, DatabaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
