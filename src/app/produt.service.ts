import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //constructor(private httpClient: HttpClient) { } 
 constructor(private httpClient: HttpClient) {

 }
    getProductList() {
    return this.httpClient.get('http://localhost:3000/products');
  }
}

