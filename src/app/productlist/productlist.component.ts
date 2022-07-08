import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

 product={
    bus:'RTC',
    ticket:200,
    km:5,
};
  
  constructor() { }

  ngOnInit(): void {
  }

}

