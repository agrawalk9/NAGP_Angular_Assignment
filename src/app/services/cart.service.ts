import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private addedProduct: Product[] = [];

  constructor() { }

  addProductToCart(product: Product): void {
    const index = this.addedProduct.findIndex((obj: Product) => product['id'] === obj['id']);
    if(index !== -1) {
      this.addedProduct[index]['quantity'] = +this.addedProduct[index]['quantity'] + 1;
    } else {
      this.addedProduct.push(product);
    }
  }

  getProducts(): Product[] {
    return this.addedProduct;
  }

  removeProduct(id: string): void {
    this.addedProduct = [...this.addedProduct.filter((obj: Product) => id !== obj['id'])];
  }

  decreaseQuantity(id: string): void {
    const index = this.addedProduct.findIndex((obj: Product) => id === obj['id']);
    let q = +this.addedProduct[index]['quantity'];
    if(q > 1) {
      this.addedProduct[index]['quantity'] = q-1;
    } else {
      this.removeProduct(id);
    }
  }

  increaseQuantity(id: string): void {
    const index = this.addedProduct.findIndex((obj: Product) => id === obj['id']);
    let q = +this.addedProduct[index]['quantity'];
    this.addedProduct[index]['quantity'] = q+1;
  }
}
