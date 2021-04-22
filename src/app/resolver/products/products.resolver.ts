import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductServiceService } from 'src/app/services/product/product-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private readonly productService: ProductServiceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.productService.getProducts();
  }
}
