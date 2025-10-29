import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model = { name: '', email: '', message: '' };
  submitted = false;

  submit() {
    this.submitted = true;
    setTimeout(() => {
      this.model = { name: '', email: '', message: '' };
      this.submitted = false;
    }, 1200);
  }
}
