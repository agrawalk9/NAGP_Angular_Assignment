import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private addedProduct: Product[] = [];

  constructor() { }

  addProductToCart(product: Product): void {
    // tslint:disable-next-line: no-string-literal
    const index = this.addedProduct.findIndex((obj: Product) => product['id'] === obj['id']);
    if (index !== -1) {
      // tslint:disable-next-line: no-string-literal
      this.addedProduct[index]['quantity'] = +this.addedProduct[index]['quantity'] + 1;
    } else {
      this.addedProduct.push(product);
    }
  }

  getProducts(): Product[] {
    return this.addedProduct;
  }

  removeProduct(id: string): void {
    // tslint:disable-next-line: no-string-literal
    this.addedProduct = [...this.addedProduct.filter((obj: Product) => id !== obj['id'])];
  }

  decreaseQuantity(id: string): void {
    // tslint:disable-next-line: no-string-literal
    const index = this.addedProduct.findIndex((obj: Product) => id === obj['id']);
    // tslint:disable-next-line: no-string-literal
    const q = +this.addedProduct[index]['quantity'];
    if (q > 1) {
      // tslint:disable-next-line: no-string-literal
      this.addedProduct[index]['quantity'] = q - 1;
    } else {
      this.removeProduct(id);
    }
  }

  increaseQuantity(id: string): void {
    // tslint:disable-next-line: no-string-literal
    const index = this.addedProduct.findIndex((obj: Product) => id === obj['id']);
    // tslint:disable-next-line: no-string-literal
    const q = +this.addedProduct[index]['quantity'];
    // tslint:disable-next-line: no-string-literal
    this.addedProduct[index]['quantity'] = q + 1;
  }

  emptyCart(): void {
    this.addedProduct.length = 0;
  }
}
