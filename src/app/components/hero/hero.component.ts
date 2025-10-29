import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ required for ngStyle, ngIf, ngFor, etc.
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule , NgxTypedJsModule],  // ✅ make sure CommonModule is listed here
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  heroImage =
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=80';
}
