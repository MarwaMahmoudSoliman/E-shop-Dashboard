import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  // Use @Input to receive data from the parent component
  @Input() title: string = '';    // Title of the stat, e.g., "Revenue"
  @Input() value: number = 0;     // Value of the stat, e.g., $420
  @Input() change: number = 0;    // Change in value (e.g., percentage change)
  @Input() period: string = '';   // Period of the stat, e.g., "Annual", "Monthly"
}

