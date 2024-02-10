import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  AllLinks: string[] = ['about', 'portfolio', 'contact'];
  isScroll: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Get the scroll position
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Add a CSS class when scrolling
    if (scrollY > 150) {
      // Adjust the scroll threshold as needed
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }
}
