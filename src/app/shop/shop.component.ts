import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  product!: Product;
  titleInvalid = false;
  titleTouched = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.product = new Product();
  }

  validateTitle() {
    const title = this.product.title;
    if (title.length < 3 || !/^[A-Z]/.test(title)) {
      this.titleInvalid = true;
    } else {
      this.titleInvalid = false;
    }
    this.titleTouched = true;
  }

  isFormValid(): boolean {
    // Check for empty or whitespace values for all fields
    if (!this.product.id || this.product.id.trim() === '' ||
      !this.product.title || this.product.title.trim() === '' ||
      !this.product.quantity || this.product.quantity.trim() === '') {
      return false; // Return false if any field is empty
    }
   
    return true; // If all fields are valid, return true
  }

  validateForm(): void {
    const isValid = this.product.id && this.product.quantity && this.product.title &&
      this.product.id >= 1 && this.product.id <= 9 &&
      this.product.quantity.toString().length === 3 &&
      this.product.title.length >= 3 && this.product.title === this.product.title.toUpperCase();

    if (isValid) {
      // Redirect to home page with query parameters
      this.router.navigate(['/home'], { queryParams: { id: this.product.id, title: this.product.title, quantity: this.product.quantity } });
    }
  }
  redirectToHome() {
    // Redirect to home page with query parameters
    this.router.navigate(['/home'], { queryParams: { id: this.product.id, title: this.product.title, quantity: this.product.quantity } });
  }
}
