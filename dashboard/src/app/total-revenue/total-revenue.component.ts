import { Component } from '@angular/core';

@Component({
  selector: 'app-total-revenue',
  standalone: true,
  imports: [  ],
  templateUrl: './total-revenue.component.html',
  styleUrl: './total-revenue.component.scss'
})
export class TotalRevenueComponent {
  // Data for the doughnut chart
  public revenueData: number[] = [70, 30];  // Example data (70% sales, 30% others)
  
  // Labels for the doughnut chart
  public revenueLabels: string[] = ['Sales', 'Other'];
}
