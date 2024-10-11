import { Component } from '@angular/core';
import { StatsComponent } from '../stats/stats.component';
import { TotalRevenueComponent } from '../total-revenue/total-revenue.component';
import { LatestOrdersComponent } from "../latest-orders/latest-orders.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatsComponent, TotalRevenueComponent, LatestOrdersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
