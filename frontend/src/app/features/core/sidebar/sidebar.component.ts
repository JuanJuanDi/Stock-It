import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  inventoryOpen = false;

  constructor(private router: Router) {}

  // Alternar submenú de inventario
  toggleInventory() {
    this.inventoryOpen = !this.inventoryOpen;
  }

  // Cerrar sesión
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
