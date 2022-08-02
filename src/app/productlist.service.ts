import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private httpClient: HttpClient) {

  }
 
  getProductItems(){
    return this.httpClient.get(' http://localhost:3000/productslist');
  }
  

}


