import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  products: any = [];

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  checkout(): void {
    this.router.navigateByUrl('/home/checkout');
  }

  increase(id: string): void {
    this.cartService.increaseQuantity(id);
    this.products = this.cartService.getProducts();
  }

  decrease(id: string): void {
    this.cartService.decreaseQuantity(id);
    this.products = this.cartService.getProducts();
  }

  remove(id: string): void {
    this.cartService.removeProduct(id);
    this.products = this.cartService.getProducts();
  }

  total(): number {
    let sum = 0;
    this.products.forEach((element: Product) => {
      // tslint:disable-next-line: no-string-literal
      sum = sum + (+element['unitPrice'] * +element['quantity']);
    });
    return sum;
  }
}
