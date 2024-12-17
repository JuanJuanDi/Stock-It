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
  // Estado para el submenú de escritorio
  isDesktopSubmenuOpen = false;

  // Estado para el submenú de mobile/tablet
  isMobileSubmenuOpen = false;

  constructor(private router: Router) {}

  /**
   * Alternar visibilidad del submenú de escritorio.
   */
  toggleDesktopSubmenu(): void {
    if (!this.isMobileView()) {
      this.isDesktopSubmenuOpen = !this.isDesktopSubmenuOpen;
    }
  }

  /**
   * Alternar visibilidad del submenú de mobile/tablet.
   */
  toggleMobileSubmenu(): void {
    if (this.isMobileView()) {
      this.isMobileSubmenuOpen = !this.isMobileSubmenuOpen;
    }
  }

  /**
   * Cerrar el submenú de mobile/tablet.
   */
  public closeMobileSubmenu(): void {
    this.isMobileSubmenuOpen = false;
  }

  /**
   * Determinar si el componente está en un modo móvil o tablet basado en el ancho de la ventana.
   * @returns `true` si el ancho de la ventana es menor que 1024px (breakpoint `lg`).
   */
  public isMobileView(): boolean {
    return window.innerWidth < 1024;
  }

  /**
   * Listener para redimensionar la ventana y cerrar menús si es necesario.
   */
  @HostListener('window:resize', [])
  onWindowResize(): void {
    // Cerrar el submenú de escritorio si se pasa a mobile/tablet
    if (this.isMobileView()) {
      this.isDesktopSubmenuOpen = false;
    }
    // Cerrar el submenú de mobile/tablet si se pasa a desktop
    if (!this.isMobileView()) {
      this.closeMobileSubmenu();
    }
  }

  /**
   * Escuchar la tecla Escape para cerrar menús si están abiertos.
   * @param event Evento de teclado capturado.
   */
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    if (this.isMobileSubmenuOpen) {
      this.closeMobileSubmenu();
    }
    if (this.isDesktopSubmenuOpen) {
      this.isDesktopSubmenuOpen = false;
    }
  }

  /**
   * Manejar navegación para cerrar sesión.
   */
  public logOut(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
