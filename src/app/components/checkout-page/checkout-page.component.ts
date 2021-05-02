import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit, OnDestroy {

  checkoutObj: any = {};

  constructor(private readonly router: Router, private readonly cartService: CartService) {
    this.checkoutObj = {
      name: '',
      number: '',
      email: '',
      address: ''
    };
  }
  ngOnDestroy(): void {
    this.checkoutObj.name = '';
    this.checkoutObj.number = '';
    this.checkoutObj.email = '';
    this.checkoutObj.address = '';
    this.cartService.emptyCart();
  }

  ngOnInit(): void {
  }

  checkout(checkoutForm: NgForm): void {
    alert('Your order has been placed');
    this.router.navigateByUrl('/home');
  }
}
