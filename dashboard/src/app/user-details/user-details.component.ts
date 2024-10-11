import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

import { Orders } from '../interfaces/orders';
import { Users } from '../interfaces/users';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-detail',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: Users| undefined;
  orders: Orders[] = [];
  userId: string | null;
  products: any[] = [];

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    this.userId = this.route.snapshot.paramMap.get('id'); // get user ID from the route
  }

  ngOnInit(): void {
    if (this.userId) {
      this.loadUserDetails(this.userId);
      // this.loadUserOrders(this.userId);
    }
  }

  loadUserDetails(userId: string) {
    this.userService.getOne(userId).subscribe({
      next: (res) => {
        this.user = res.data;
        console.log(this.user);
      
      },
      error: (err) => { }
    })}

  // loadUserOrders(userId: string) {
  //   this.userService.getUserOrders(userId).subscribe({
  //     next: (orders) => {
  //       this.orders = orders;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching user orders:', error);
  //     }
  //   });
  // }
}
