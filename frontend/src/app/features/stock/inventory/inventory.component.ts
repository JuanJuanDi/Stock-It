import { Component } from '@angular/core';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

}
