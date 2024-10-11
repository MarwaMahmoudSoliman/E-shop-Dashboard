

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CategoriesService } from '../services/categories.service';
@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.scss'
})
export class DeleteCategoryComponent implements OnInit, OnDestroy {
  
  categoryId: string = '';
  category: any = {};
  subscription: any;
  categoryForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.min(2), Validators.max(50)])
  })

  constructor(private _AuthService: AuthService, private _CategoriesService: CategoriesService,
    private _Router: Router, private _ActivatedRoute: ActivatedRoute
  ) { }

  loadCategory(categoryId: string) {
    this.subscription = this._CategoriesService.getOne(categoryId).subscribe({
      next: (res) => { this.category = res.data },
      error: (err) => { }
    })
  }

  deleteCategory(categoryId: string) {
    this._CategoriesService.deleteOne(categoryId).subscribe({
      next: (res) => {
        alert('category deleted');
        this._Router.navigate(['/categories']);
     
      },
      error: () => { }
    })
  }

  ngOnInit(): void {
    this._AuthService.checkToken();
    this.categoryId = this._ActivatedRoute.snapshot.params['id'];
    this.loadCategory(this.categoryId)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

