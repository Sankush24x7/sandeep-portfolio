import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'ats-score', label: 'Check ATS-Score' }
  ];

  activeSection = '';

  // Detect active section when scrolling
  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPos = window.scrollY + 100;
    for (const item of this.navItems) {
      const section = document.getElementById(item.id);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          this.activeSection = item.id;
          break;
        }
      }
    }
  }

  // Close menu on link click (for mobile)
  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse.show');
    if (navbar) {
      (navbar as HTMLElement).classList.remove('show');
    }
  }
}
