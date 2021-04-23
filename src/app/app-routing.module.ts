import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { CheckoutGuard } from './guards/checkout/checkout.guard';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from './components/product-list-page/product-list-page.component';
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
    { path: 'checkout', component: CheckoutPageComponent, canActivate: [AuthGuard, CheckoutGuard] }
  ] },
  { path: '**', component: ErrorPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
