import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = "https://yildizproductchainapi.azurewebsites.net/Product/";
  constructor(private http:HttpClient) { }

  getProduct(barcode: string) : Observable<Product> {
    console.log(this.apiUrl + barcode);
    return this.http.get<Product>(this.apiUrl + barcode);
  }
}
