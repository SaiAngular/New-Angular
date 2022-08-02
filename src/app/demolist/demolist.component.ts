import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demolist',
  templateUrl: './demolist.component.html',
  styleUrls: ['./demolist.component.css'],
  providers:[ DemoService]
})
export class DemolistComponent implements OnInit {
  pageTitle:string="Menu List";
  head='Biryani House Welcomes YOU!';
  imageWidth:number=75;
  imageMargin:number=20;
  listFilter:string=' ';
  showImage:boolean=false;
  demolist: any=[];

  constructor(private demoService: DemoService ) {


   }

  ngOnInit(): void {

    this.getdemolist();
  }

  getdemolist(){
    this.demoService.getdemoList().subscribe(data=>{
  
      console.log(data);
      this.demolist=data;
      console.log(this.demolist);
    })
   }
   toggleImage(): void{
    this.showImage= !this.showImage;
  }

}
