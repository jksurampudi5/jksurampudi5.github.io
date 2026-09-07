import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ContactItem {
  label: string;
  value: string;
  displayValue: string;
  icon: string;
  isUrl: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  copiedItem: string | null = null;

  contacts: ContactItem[] = [
    {
      label: 'Email',
      value: 'mailto:jksurampudi5@gmail.com',
      displayValue: 'jksurampudi5@gmail.com',
      icon: '✉️',
      isUrl: true
    },
    {
      label: 'Phone',
      value: 'tel:+918639452948',
      displayValue: '+91 8639452948',
      icon: '📱',
      isUrl: true
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/sjkm46/',
      displayValue: 'linkedin.com/in/sjkm46',
      icon: '💼',
      isUrl: true
    },
    {
      label: 'GitHub',
      value: 'https://github.com/jksurampudi5',
      displayValue: 'github.com/jksurampudi5',
      icon: '🐙',
      isUrl: true
    },
    {
      label: 'Medium',
      value: 'https://medium.com/@jkSurampudi5',
      displayValue: 'medium.com/@jkSurampudi5',
      icon: '✍️',
      isUrl: true
    }
  ];

  copyToClipboard(text: string, label: string) {
    const cleanText = text.replace(/^(mailto:|tel:)/, '');
    navigator.clipboard.writeText(cleanText).then(() => {
      this.copiedItem = label;
      setTimeout(() => {
        this.copiedItem = null;
      }, 2500);
    });
  }
}