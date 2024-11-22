import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { LoginService } from '../services/login.service';
// import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [FormsModule, CommonModule, RouterModule],
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    emailError: string = '';
    passwordError: string = '';

    // constructor(private router: Router, private _loginService: LoginService) {}

    validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.email) {
            this.emailError = 'El correo electrónico es obligatorio.';
        } else if (!emailPattern.test(this.email)) {
            this.emailError = 'Por favor, introduce un correo electrónico válido.';
        } else {
            this.emailError = '';
        }
    }

    validatePassword() {
        if (!this.password) {
            this.passwordError = 'La contraseña es obligatoria.';
        } else if (this.password.length < 6) {  // Validación de 6 caracteres
            this.passwordError = 'La contraseña debe tener al menos 6 caracteres.';
        } else {
            this.passwordError = '';
        }
    }

    onLogin() {
        this.validateEmail();
        this.validatePassword();
        
        // if (!this.emailError && !this.passwordError) {
        //     this._loginService.iniciarSesion({ email: this.email, clave: this.password }).subscribe({
        //         next: (data) => {
        //             sessionStorage.setItem('login', 'true');
        //             this.router.navigate(['/inventario']);
        //         },
        //         error: (error) => {
        //             Swal.fire({
        //                 icon: 'error',
        //                 title: 'Correo electrónico o contraseña inválidos.',
        //                 text: 'Por favor, inténtalo de nuevo.',
        //                 timer: 2000,
        //                 showConfirmButton: false,
        //             });
        //         },
        //     });
        }
    }

