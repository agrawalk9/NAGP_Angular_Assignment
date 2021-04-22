import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  checkoutObj: any = {}

  constructor() { 
    this.checkoutObj = {
      "name": "",
      "number": 0,
      "email": "",
      "shippingDetails": ""
    }
  }

  ngOnInit(): void {
  }

  checkout(): void {
    console.log("checked out");
  } 
}
