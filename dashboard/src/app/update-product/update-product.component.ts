import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ReviewsService } from '../services/reviews.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit, OnDestroy {
  productId: string = '';
  product: any = {};
  subscription: any;
  imgDomain: string = '';
  id: string = '';
  productForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
  });

  constructor(private _AuthService: AuthService, private _ProductsService:ProductsService,
    private _Router: Router, private _ActivatedRoute: ActivatedRoute
  ) { }

  loadProduct(productId: string) {
    this.subscription = this._ProductsService.getOne(productId).subscribe({
      next: (res) => { this.product = res.data },
      error: (err) => { }
    })
  }

  updateProduct(productId: string, formData: FormGroup) {
    this._ProductsService.updateOne(productId, formData.value).subscribe({
      next: (res) => {
        alert('product updated');
        this._Router.navigate(['/products']);
     
      },
      error: () => { }
    })
  }

  ngOnInit(): void {
    this._AuthService.checkToken();
    this.productId = this._ActivatedRoute.snapshot.params['id'];
    this.loadProduct((this.productId ))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

