import { Component } from '@angular/core';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

}
