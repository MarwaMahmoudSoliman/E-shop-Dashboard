import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CouponsService } from '../services/coupons.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-coupon',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.scss']
})
export class UpdateCouponComponent implements OnInit {
  couponId: string | null = null;
  couponForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, [Validators.required]),
    expireTime: new FormControl(null, [Validators.required])
  });

  constructor(
    private _AuthService: AuthService,
    private _CouponsService: CouponsService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._AuthService.checkToken();
    
    // Get the coupon ID from route parameters
    this.couponId = this._ActivatedRoute.snapshot.paramMap.get('id');
    
    if (this.couponId) {
      // Fetch the coupon data and populate the form
      this._CouponsService.getOne(this.couponId).subscribe({
        next: (couponData) => {
          this.couponForm.setValue({
            name: couponData.name,
            discount: couponData.discount,
            expireTime: couponData.expireTime
          });
        },
        error: (err) => {
          console.error('Error fetching coupon', err);
        }
      });
    }
  }

  updateCoupon(formData: FormGroup) {
    if (this.couponId) {
      this._CouponsService.updateOne(this.couponId, formData.value).subscribe({
        next: (res) => {
          alert('Coupon updated successfully');
          this._Router.navigate(['/coupons']);
        },
        error: (err) => {
          console.error('Error updating coupon', err);
        }
      });
    }
  }
}
