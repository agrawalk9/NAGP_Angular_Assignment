import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductResolver } from './resolver/product/product.resolver';
import { ProductsResolver } from './resolver/products/products.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', children: [
    { path: '', component: ProductListPageComponent, resolve: {
      products: ProductsResolver
    } },
    { path: 'product/:id', component: ProductDetailPageComponent, resolve: {
      product: ProductResolver
    } },
    { path: 'cart', component: CartPageComponent, canActivate: [AuthGuard] },
    { path: 'checkout', component: CheckoutPageComponent, canActivate: [AuthGuard] }
  ] },
  { path: '**', component: ErrorPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
