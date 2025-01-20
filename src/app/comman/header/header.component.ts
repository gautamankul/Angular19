import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  closeMenu() {
    this.isMenuVisible = false;
  }

  // Optional: Close the menu when clicking outside of it
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.popup-menu') && !target.closest('.profile-img')) {
      this.closeMenu();
    }
  }

}
