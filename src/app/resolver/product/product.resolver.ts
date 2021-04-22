import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductServiceService } from 'src/app/services/product/product-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Observable<Product[]>> {
  constructor(private readonly productService: ProductServiceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    const id = route.paramMap.get('id');
    return this.productService.getProductById(id !== null ? id : '');
  }
}
