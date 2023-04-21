import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  @Output() cartItem = new EventEmitter();
  selectedOption: number = 1;
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  addToCart(product: Product, amount: number) {
    const item = {...product, amount: amount};
    this.cartItem.emit(item);
    alert('Added to cart!');
  }
}
