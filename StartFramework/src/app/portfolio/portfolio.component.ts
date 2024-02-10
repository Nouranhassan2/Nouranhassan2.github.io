import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  images: string[] = [
    'assets/poert1.png',
    'assets/port2.png',
    'assets/port3.png',
    // Add more image URLs as needed
  ];
}
