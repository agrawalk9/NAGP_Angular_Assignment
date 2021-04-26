import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as tree from '../../../../assets/mock-data/tree-data.json';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


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
  // isMasterSel = false;
  // categoryList: any;
  // checkedCategoryList: any;

  treeControl = new NestedTreeControl<ProductNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ProductNode>();

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {
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

  // checkUncheckAll(): void {
  //   for (const category of this.categoryList.length) {
  //     category.isSelected = this.isMasterSel;
  //   }
  //   this.getCheckedItemList();
  // }

  // isAllSelected(): void {
  //   this.isMasterSel = this.categoryList.every((item: any) => {
  //       return item.isSelected === true;
  //     });
  //   this.getCheckedItemList();
  // }

  // getCheckedItemList(): void{
  //   this.checkedCategoryList = [];
  //   for (const category of this.categoryList.length) {
  //     if (category.isSelected) {
  //     this.checkedCategoryList.push(category);
  //     }
  //   }
  //   this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  // }

  goToPdp(id: string): void {
    this.router.navigateByUrl(`/home/product/${id}`);
  }

  goToCart(): void {
    this.router.navigateByUrl(`/home/cart`);
  }

}
