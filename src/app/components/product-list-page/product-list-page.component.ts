import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  products: any = [];
  searchInput = '';

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

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

  goToPdp(id: string): void {
    this.router.navigateByUrl(`/home/product/${id}`);
  }

  goToCart(): void {
    this.router.navigateByUrl(`/home/cart`);
  }
}
