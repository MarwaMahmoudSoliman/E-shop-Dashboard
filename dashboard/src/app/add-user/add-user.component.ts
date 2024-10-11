import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  standalone: true,  // Declare as standalone
  imports: [ReactiveFormsModule, CommonModule],  // Import modules directly into the component
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private _UsersService: UsersService, private _Router: Router) { }

  ngOnInit(): void {
    // Initialize the form using FormBuilder
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
   password: ['', Validators.required],
   confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.addUserForm.valid) {
      const formData = this.addUserForm.value;

      this._UsersService.createOne(formData).subscribe({
        next: (res) => {
          alert('User added successfully');
          this._Router.navigate(['/users']);
        },
        error: (err) => {
          console.error('Error creating user:', err);
        }
      });
    } else {
      alert('Please fill all required fields');
    }
  }
}
