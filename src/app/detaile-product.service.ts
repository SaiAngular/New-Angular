import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetaileProductService {

  constructor(private httpClient: HttpClient) {

  }
     getProductList(): Observable<any> {
     return this.httpClient.get('http://localhost:3000/products');
   }
}
