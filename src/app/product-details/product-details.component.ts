import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  data1: any;
  constructor(private activatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.getId();
    //this.getIddynamic()
  }
  getId(){
   const id= this.activatedRoute.snapshot.paramMap.get('Id');
    console.log(id);
    this.data1=id;
    
  }

  getIddynamic(): void{
    this.activatedRoute.paramMap.subscribe(params =>{
      console.log(params);
    })
  }

  goToproductlist(){
    this.router.navigate(['/productlist']);
  }
}



