import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product.model';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private productBaseUrl = 'assets/mock-data';

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    const url = `${this.productBaseUrl}/products-data.json`;
    return this.httpClient.get<Product[]>(url);
  }

  public getProductById(id?: string): Observable<Product[]> {
    const url = `${this.productBaseUrl}/products-data.json`;
    return this.httpClient.get<Product[]>(url).pipe(
      // tslint:disable-next-line: no-string-literal
      (map ((data: any) => data.filter((obj: any) => obj['id'] === id)))
    );
  }
}
