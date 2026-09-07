import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <button (click)="scroll('home')" class="nav-link">Home</button>
      <button (click)="scroll('skills')" class="nav-link">Skills</button>
      <button (click)="scroll('projects')" class="nav-link">Projects</button>
      <button (click)="scroll('contact')" class="nav-link">Contact</button>
    </nav>
  `,
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  scroll(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}