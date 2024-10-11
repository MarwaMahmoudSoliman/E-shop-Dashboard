
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  metrics = [
    { title: 'Total Sales', value: '$15,000' },
    { title: 'Total Orders', value: 120 },
    { title: 'Total Customers', value: 340 },
    { title: 'Total Products', value: 230 }
  ];


  recentOrders = [
    { id: 'OD001', customer: 'John Doe', date: '2024-09-27', total: '$150', status: 'Shipped' },
    { id: 'OD002', customer: 'Jane Smith', date: '2024-09-26', total: '$200', status: 'Pending' },
    { id: 'OD003', customer: 'Paul Adams', date: '2024-09-25', total: '$50', status: 'Delivered' }
  ];

  // Columns for the orders table
  displayedColumns: string[] = ['id', 'customer', 'date', 'total', 'status'];

  ngOnInit() {
    // Initialize sales chart
    this.loadSalesChart();
  }

  // Load Sales Chart using Chart.js
  loadSalesChart() {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Sales ($)',
          data: [1200, 1900, 3000, 5000, 2500, 7000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}
