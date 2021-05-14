import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as tree from '../../../assets/mock-data/tree-data.json';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart/cart.service';


interface ProductNode {
  name: string;
  children?: ProductNode[];
}


@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.css']
})
export class ProductsListPageComponent implements OnInit {

  products: any = [];
  searchInput = '';

  treeControl = new NestedTreeControl<ProductNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ProductNode>();

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private readonly cartService: CartService) {
    this.dataSource.data = (tree as any).default;
  }

  hasChild = (_: number, node: ProductNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.data.subscribe({
      next: (data) => {
        for (const element of data.products) {
          if (this.products.findIndex((product: any) => element.category === product.category) === -1) {
            this.products.push({
              category: element.category,
              list: [element]
            });
          } else {
            for (const product of this.products) {
              if (product.category === element.category) {
                product.list.push(element);
              }
            }
          }
        }
      }
    });
  }

  addToCart(product: Product): void {
    this.cartService.addProductToCart(product);
    this.router.navigateByUrl('/home/cart');
  }

  goToPdp(id: string): void {
    this.router.navigateByUrl(`/home/product/${id}`);
  }

  goToCart(): void {
    this.router.navigateByUrl(`/home/cart`);
  }

}
