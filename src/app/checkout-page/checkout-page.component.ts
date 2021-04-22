import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  checkoutObj: any = {};

  constructor(private readonly router: Router, private readonly cartService: CartService) {
    this.checkoutObj = {
      name: '',
      number: '',
      email: '',
      shippingDetails: ''
    };
  }

  ngOnInit(): void {
  }

  checkout(checkoutForm: NgForm): void {
    this.checkoutObj.name = '';
    this.checkoutObj.number = '';
    this.checkoutObj.email = '';
    this.checkoutObj.shippingDetails = '';
    this.cartService.emptyCart();
    alert('Checked Out');
    this.router.navigateByUrl('/home');
  }
}
