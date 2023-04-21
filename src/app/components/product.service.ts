import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem, Product } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private jsonUrl = 'assets/data.json';
  cartList: CartItem[] = [];

  constructor(private http: HttpClient) {}

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  addProductToCart(product: Product, amount: number) {
    this.cartList.push({ ...product, amount: amount });
    return this.cartList;
  }

  removeItem(i: CartItem) {
    this.cartList = this.cartList.filter((item) => item.id !== i.id);
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }
}
