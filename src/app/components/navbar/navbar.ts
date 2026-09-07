import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar-wrapper">
      <nav class="navbar-pill">
        <div class="brand" (click)="scroll('home')">
          <span class="brand-badge">JS</span>
          <span class="brand-text">Jayakrishna<span class="brand-dot">.</span></span>
        </div>

        <div class="nav-links">
          <button (click)="scroll('home')" class="nav-link">Home</button>
          <button (click)="scroll('skills')" class="nav-link">Skills</button>
          <button (click)="scroll('projects')" class="nav-link">Experience</button>
          <button (click)="scroll('contact')" class="nav-link">Contact</button>
        </div>

        <div class="nav-cta">
          <button (click)="scroll('contact')" class="cta-pill">
            <span class="pulse-dot"></span>
            Let's Talk
          </button>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  scroll(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}