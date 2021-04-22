import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  product: any;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => { 
        // console.log(data);
        this.product = data.product[0];
        // this.route.params.forEach((params: Params) => {
        //   let productId = params['id'];
        //   let products = data.product.filter((obj: Product) => obj['id'] === productId);
        //   if (products.length > 0) {
        //     this.product = products[0];
        //   }
        // });
      }
    });
  }

  addToCart(product: Product): void {
    // console.log('added to cart');
    this.cartService.addProductToCart(product);
    this.router.navigateByUrl('/home/cart');
  }
}
