import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/products.service'; // Import the ProductsService

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './delete-product.component.html', 
  styleUrls: ['./delete-product.component.scss'] 
})
export class DeleteProductComponent implements OnInit, OnDestroy {

  productId: string = '';
  product: any = {};
  subscription: any;
  productForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)])
  });

  constructor(
    private _AuthService: AuthService,
    private _ProductsService: ProductsService, // Use ProductsService
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) { }

  loadProduct(productId: string) {
    this.subscription = this._ProductsService.getOne(productId).subscribe({
      next: (res) => { this.product = res.data; },
      error: (err) => { console.error('Error loading product:', err); }
    });
  }

  deleteProduct(productId: string) {
    this._ProductsService.deleteOne(productId).subscribe({
      next: (res) => {
        alert('Product deleted');
        this._Router.navigate(['/products']); // Redirect to product list after deletion
      },
      error: (err) => { console.error('Error deleting product:', err); }
    });
  }

  ngOnInit(): void {
    this._AuthService.checkToken();
    this.productId = this._ActivatedRoute.snapshot.params['id'];
    this.loadProduct(this.productId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
