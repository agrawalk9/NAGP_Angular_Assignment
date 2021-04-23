import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchInput: string): any[]{
   searchInput = searchInput.toLowerCase();
   return products.filter(
       // tslint:disable-next-line: no-string-literal
       x => x['name'].toLowerCase().includes(searchInput)
   );
 }

}
