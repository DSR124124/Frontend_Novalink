import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  currentLabel: string = '';
  items: MenuItem[] | undefined;

  private routerSubscription!: Subscription;

  constructor(
    private router: Router,
    private menuService: MenuService
  ) {
    this.items = [
      {
        label: 'usuario',
        items: [
          { separator: true },
          {
            label: 'Mi perfil',
            icon: 'pi pi-user',
            routerLink: '/home/usuario'
          },
          {
            label: 'Configuración',
            icon: 'pi pi-cog',
            routerLink: '/home/configuracion'
          },
          {
            label: 'Ayuda y Asistencia',
            icon: 'pi pi-question',
            routerLink: '/home/configuracion'
          },
          {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out',
            routerLink: '/login'
          },
        ]
      }
    ];
  }

  ngOnInit() {
    const currentUrl = this.router.url;
    this.findLabelForUrl(currentUrl);

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const newUrl = event.urlAfterRedirects;
        this.findLabelForUrl(newUrl);
        console.log('hola')
      });
  }

  private findLabelForUrl(url: string) {
    const items = this.menuService.getMenuItems();
    for (const item of items) {
      if (item.ruta && url.startsWith(item.ruta)) {
        this.currentLabel = item.nombre;
        return;
      }
    }

    // Si no se encontró coincidencia
    this.currentLabel = '';
  }


  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
