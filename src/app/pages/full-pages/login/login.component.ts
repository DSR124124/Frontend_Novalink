import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
// Configuración local para NOVALINK
const version = '1.0.0';
const titulo = 'NOVALINK';
const tituloVersion = 'Conectando corazones';
import { LoadingService } from '../../../shared/services/loading.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FullscreenService } from '../../../shared/services/fullscreen.service';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [],
})
export class LoginComponent implements OnInit, OnDestroy {
  titulo: string = 'NOVALINK';
  tituloVersion: string = 'Conectando corazones';
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  version: string = version;
  loading: boolean = false;

  hayError: boolean = false;

  ref: DynamicDialogRef | undefined;

  isFullscreen: boolean = false;
  buttonLabel: string = 'Pantalla completa';
  private fullscreenSubscription!: Subscription;

  constructor(
    private router: Router,
    public dialogService: DialogService,
    private loginService: LoginService,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private fullscreenService: FullscreenService,
  ) { }

  ngOnInit(): void {
    this.fullscreenSubscription = this.fullscreenService.isFullscreen$.subscribe(state => {
      this.isFullscreen = state;
      this.buttonLabel = state ? 'Salir de pantalla completa' : 'Pantalla completa';
    });

    // Limpiar errores previos al inicializar
    this.hayError = false;
  }

  ngOnDestroy(): void {
    if (this.fullscreenSubscription) {
      this.fullscreenSubscription.unsubscribe();
    }
  }

  toggleFullscreen(): void {
    if (!this.isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  onSubmit() {
    // Limpiar errores previos
    this.hayError = false;

    if (this.username === '' || this.password === '') {
      this.error('Por favor, completa todos los campos para continuar');
      this.hayError = true;
    } else {
      this.validarLogin();
    }
  }

  validarLogin() {
    this.loading = true;
    this.loadingService.show();

    this.loginService.getLogin(this.username, this.password).subscribe({
      next: (resp) => {
        if (resp.responseCode == "00") {
          this.messageService.add({
            severity: 'success',
            summary: '¡Bienvenido a NOVALINK!',
            detail: 'Has iniciado sesión exitosamente. ¡Comienza a conectar!'
          });

          // Si remember me está activo, guardar credenciales (implementar según necesidades)
          if (this.rememberMe) {
            // Implementar lógica de recordar usuario
            localStorage.setItem('novalink_remember', 'true');
            localStorage.setItem('novalink_username', this.username);
          }

          this.router.navigate(['/dashboard']); // Cambiar a la ruta principal de la app
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error de autenticación',
            detail: `${resp.message}`
          });
          this.hayError = true;
        }
        this.loading = false;
        this.loadingService.hide();
      },
      error: (error) => {
        this.loading = false;
        this.loadingService.hide();
        this.messageService.add({
          severity: 'error',
          summary: 'Error de conexión',
          detail: 'No se pudo conectar con el servidor. Por favor, intenta nuevamente.'
        });
        this.hayError = true;
      }
    })
  }

  goToRegister() {
    // Navegar a la página de registro
    this.router.navigate(['/register']);
  }

  error(mensaje: string) {
    this.messageService.add({
      severity: 'error',
      summary: '¡Oops!',
      detail: mensaje
    });
  }

  aviso(mensaje: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Aviso',
      detail: mensaje
    });
  }
}
