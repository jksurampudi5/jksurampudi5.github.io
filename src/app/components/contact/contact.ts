import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactLinks = [
    { label: 'LinkedIn', value: 'https://www.linkedin.com/in/sjkm46/' },
    { label: 'Medium', value: 'https://medium.com/@jkSurampudi5' },
    { label: 'GitHub', value: 'https://github.com/jayakrishna_surampudi' },
    { label: 'Email', value: 'jksurampudi5@gmail.com' },
    { label: 'Phone', value: '+918639452948' }
  ];

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    alert('Copied: ' + text);
  }
}