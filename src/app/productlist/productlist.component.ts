import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent  {
pageTitle:string = "Product List";
imageWidth: number=50;
imageMargin:number=3;
// showImage:boolean=false;


 products: any[] = [
  
  {
    
    "productName":"Television",
    "productDate":"Sep 16,2022",
    "price":200,
    "rating":5,
   
  }];
  

  
  
}

