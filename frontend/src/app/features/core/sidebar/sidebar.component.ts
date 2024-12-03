import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // Estado para el subinventario
  isSubInventoryOpen = false;

  constructor(private router: Router) {}

  // Alternar visibilidad del subinventario
  toggleSubInventory(): void {
    this.isSubInventoryOpen = !this.isSubInventoryOpen;
  }

  // Cerrar el subinventario (público para ser reutilizado)
  public closeSubInventory(): void {
    this.isSubInventoryOpen = false;
  }

  // Escuchar la tecla Esc para cerrar el subinventario si está abierto
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    if (this.isSubInventoryOpen) {
      this.closeSubInventory();
    }
  }

  // Navegar y cerrar sesión
  public logOut(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
