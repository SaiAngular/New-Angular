import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { DetaileProductService } from '../detaile-product.service';
import { IProduct } from '../models/product';
import { ProductlistService } from '../productlist.service';
import { ProductService } from '../produt.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],

})
export class ProductlistComponent implements OnInit {
  
  pageTitle:string="Menu List";
  head='Biryani House Welcomes YOU!';
  imageWidth:number=75;
  imageMargin:number=20;
  listFilter:string=' ';
  showImage:boolean=false;
  products: any;
  productlistItems: any=[];
    
  
  
   constructor(private productService: ProductService, 
               private productlistService: ProductlistService,
               private  demoService: DemoService) { }

   ngOnInit(): void {
    
     this.getproductlist();
    // this.getProductItems();
     
   }
 getproductlist(){
//     // this.productService.getProductList().subscribe( response => {});

this.productService.getProductList().subscribe(res=>{
  console.log(res);
  this.products = res;
})
   
 }

 getProductItems(){
  this.productlistService.getProductItems().subscribe(data=>{

    console.log(data);
    this.productlistItems=data;
    console.log(this.productlistItems);
  })
 }
    


  // performFilter(filterBy:string):any[]{(
  //   filterBy =filterby.tolocalelowercase().includes(filterby));
  //   return this.products.filter(products:any)=>
  //   product.productName)
  // }

  toggleImage(): void{
     this.showImage= !this.showImage;
   }


// }

//  products: any[]=[
//   {
//           "productId":1,
//           "productName":" Chiken Soup",
//           "productCode":" CS 01",
//           "releaseDate":"Jan 3 - 2010",
//           "price":100,
//           "rating":1.5,
//           "imageUrl":"assets/chikensoup.jpg"
//         },
//         {
//           "productId":2,
//           "productName":"Chiken Biryani",
//           "productCode":"CK 01",
//           "releaseDate":"Feb 29, 2016",
//           "price":250,
//           "rating":2.9,
//           "imageUrl":"assets/chikenbiryani.jpg"
//         },
//         {
//           "productId":3,
//           "productName":"Chiken Legs",
//           "productCode":"CK 02",
//           "releaseDate":"Mar 11, 2017",
//           "price":180,
//           "rating":3.4,
//           "imageUrl":"assets/chikenlegs.jpg"
//         },
//         {
//           "productId":4,
//           "productName":"Chiken Roast",
//           "productCode":"CK 03",
//           "releaseDate":"April 21 , 2018",
//           "price":240,
//           "rating":1.2,
//           "imageUrl":"assets/chikenroast.jpg"
//         },
//         {
//           "productId":5,
//           "productName":"Chiken Lolipop",
//           "productCode":"CK 04",
//           "releaseDate":"May 16, 2019",
//           "price":300,
//           "rating":3.7,
//           "imageUrl":"assets/chikenlolipop.jpeg"
//         }
// ]
onRatingClicked(message:string):void{
  this.pageTitle ='product List' +message;
}

ratingData(ge:string) {
  this.pageTitle ='product List' +ge;

}

}

