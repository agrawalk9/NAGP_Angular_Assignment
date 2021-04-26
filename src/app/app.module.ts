import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ProductListPageComponent } from './components/product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SearchPipe } from './pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsListPageComponent } from './components/products-list/products-list-page/products-list-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

export function HttpLoaderFactory(httpCLient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpCLient);
}

@NgModule({
  declarations: [
    AppComponent,
    ProductListPageComponent,
    ProductDetailPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    LoginPageComponent,
    ErrorPageComponent,
    SearchPipe,
    ProductsListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatIconModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
