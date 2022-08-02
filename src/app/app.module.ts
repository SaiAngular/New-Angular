import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ProductlistComponent } from './productlist/productlist.component';

import { ProductService } from './produt.service';
import { StarComponent } from './star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistService } from './productlist.service';
import { DemolistComponent } from './demolist/demolist.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingRoutingModule } from './app-routing/app-routing-routing.module';


// const routes: Routes = [
//   {
//     path:'productlist',component:ProductlistComponent
//   } ,
//   {
//     path:'productlist/:Id',component:ProductDetailsComponent
//   } ,
//   {
//   path:'test',component:TestComponent
//   },{
//     path:'home',component:HomeComponent
//   },
  
//   {
//     path:'demolist', component:DemolistComponent
//   },
//     {
//     path:''  , redirectTo:'test' , pathMatch:'full'
//   },
//    {
//      path:'**', component:HomeComponent
//    }
 
  
// ]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
       ProductlistComponent,
       StarComponent,
       DemolistComponent,
       HomeComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingRoutingModule
    // RouterModule.forRoot(routes),
],
  providers: [ProductService, ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
