import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-orders',
  standalone: true,
  imports: [],
  templateUrl: './latest-orders.component.html',
  styleUrl: './latest-orders.component.scss'
})
export class LatestOrdersComponent {
  orders = [
    { _id: '1', ref: 'CDD1049', customer: 'Ekaterina Tankova', date: '12/04/2019', status: 'Delivered' },
    { _id: '2', ref: 'CDD1048', customer: 'Cao Yu', date: '12/04/2019', status: 'Delivered' }
   
  ];

}
