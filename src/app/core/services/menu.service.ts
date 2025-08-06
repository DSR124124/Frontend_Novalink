import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuElemento } from '../interfaces/core.interface';

@Injectable({ providedIn: 'root' })
export class MenuService {

  items: MenuElemento[] = [
    {
      nombre: 'Inicio',
      ruta: '/inicio',
      iconRef: 'iconInicio'
    },
    {
      nombre: 'Lotes Hilo',
      ruta: '/lote',
      iconRef: 'iconHilo'
    },
    {
      nombre: 'Logos',
      ruta: '/logo',
      iconRef: 'iconCroco'
    },
  ]

  getMenuItems(): MenuElemento[] {
    return this.items;
  }
}
