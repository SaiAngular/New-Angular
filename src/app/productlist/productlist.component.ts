import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  pageTitle:string="Menu List";
  head='Biryani House Welcomes YOU!';
  imageWidth:number=75;
  imageMargin:number=20;
  listFilter:string=' ';
  showImage:boolean=false;
  

products:any[]=[
    {
      "productId":1,
      "productName":" Chiken Soup",
      "productCode":" CS 01",
      "releaseDate":"Jan 3 - 2010",
      "price":100,
      "rating":4.5,
      "imageUrl":"assets/chikensoup.jpg"
    },
    {
      "productId":2,
      "productName":"Chiken Biryani",
      "productCode":"CK 01",
      "releaseDate":"Feb 29, 2016",
      "price":250,
      "rating":4.9,
      "imageUrl":"assets/chikenbiryani.jpg"
    },
    {
      "productId":3,
      "productName":"Chiken Legs",
      "productCode":"CK 02",
      "releaseDate":"Mar 11, 2017",
      "price":180,
      "rating":4.2,
      "imageUrl":"assets/chikenlegs.jpg"
    },
    {
      "productId":4,
      "productName":"Chiken Roast",
      "productCode":"CK 03",
      "releaseDate":"April 21 , 2018",
      "price":240,
      "rating":4.5,
      "imageUrl":"assets/chikenroast.jpg"
    },
    {
      "productId":5,
      "productName":"Chiken Lolipop",
      "productCode":"CK 04",
      "releaseDate":"May 16, 2019",
      "price":300,
      "rating":4.7,
      "imageUrl":"assets/chikenlolipop.jpeg"
    }
  ];

  // performFilter(filterBy:string):any[]{(
  //   filterBy =filterby.tolocalelowercase().includes(filterby));
  //   return this.products.filter(products:any)=>
  //   product.productName)
  // }

  toggleImage(): void{
    this.showImage= !this.showImage;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

