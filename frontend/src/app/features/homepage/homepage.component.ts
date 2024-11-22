import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// Interfaz para el producto
interface Producto {
  id: number;
  producto: string;
  descripcion: string;
  precioPublico: number;
  urlImagen: string;
  inventario: any[]; 
}

@Component({
  selector: 'app-homepage',
  standalone: true, 
  imports: [CommonModule, RouterLink],  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'], 
})
export class HomepageComponent implements OnInit {
  // Propiedades
  // variacionNavbar: boolean = false;  "Iniciar sesión" y "Cerrar sesión"
  dataProductos: Producto[] = []; // Lista de productos
  urlImagen: string = 'https://tuservidor.com/imagenes/'; // Ruta base para las imágenes

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializar los datos
    this.cargarProductos();
    this.verificarSesion();
  }

  // Método para cargar los productos (puedes reemplazar esto con una API real)
  cargarProductos(): void {
    this.dataProductos = [
      {
        id: 1,
        producto: 'Producto A',
        descripcion: 'Descripción breve del producto A.',
        precioPublico: 25.0,
        urlImagen: 'producto-a.jpg',
        inventario: [{ talla: 'M', cantidad: 10 }],
      },
      {
        id: 2,
        producto: 'Producto B',
        descripcion: 'Descripción breve del producto B.',
        precioPublico: 30.0,
        urlImagen: 'producto-b.jpg',
        inventario: [{ talla: 'L', cantidad: 5 }],
      },
      // Agrega más productos según sea necesario
    ];
  }

  // Método para verificar si hay una sesión activa
  verificarSesion(): void {
    const sesionActiva = localStorage.getItem('sesionActiva');
    //this.variacionNavbar = sesionActiva ? true : false;
  }

  // Método para cerrar sesión
  cerrarSession(): void {
    localStorage.removeItem('sesionActiva');
    // this.variacionNavbar = false;
    this.router.navigate(['/login']);
  }

  // Método que se ejecuta al hacer clic en el botón de compra
  btnWasa(): void {
    alert('¡Producto añadido al carrito!');
    // Aquí puedes implementar una lógica para añadir al carrito o redirigir
  }

  // Método para mostrar las tallas del inventario (opcional)
  cicloInventarioTallas(inventario: any[]): string {
    return inventario.map((item) => `${item.talla} (${item.cantidad})`).join(', ');
  }
}
