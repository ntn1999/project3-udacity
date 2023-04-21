import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: CartItem[] = [];
  name = '';
  address = '';
  cardNumber = '';
  total = 0;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.cartList = this.productService.cartList;
    this.total = this.getTotal(this.cartList);
  }

  onSubmit() {
    const navigationData = { total: this.total, name: this.name };
    this.router.navigate(['/confirmation'], { state: navigationData });
    this.productService.clearCart();
  }

  changeAmount(item: CartItem) {
    this.total = this.getTotal(this.cartList);
    if (item.amount === 0) {
      this.productService.removeItem(item);
      this.cartList = this.productService.cartList;
    }
  }

  getTotal(list: CartItem[]) {
    let total = 0;
    list.forEach((item) => {
      total += item.amount * item.price;
    });
    return Number(total.toFixed(2));
  }

  onCardNumberChange(e) {
    const value = e.key;
    const pattern = /[0-9]/;
    return pattern.test(value);
  }
}
