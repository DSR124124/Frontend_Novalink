import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class MenuService {

  items: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      iconRef: 'iconInicio',
      items: [
        {
          label: 'Subopción 1',
          routerLink: ['inicio', 'inicio'],
          icon: 'pi pi-check',
          iconRef: 'iconSubopcion1',
        }
      ]
    },
    {
      label: 'Cotizar',
      icon: 'pi pi-dollar',
      iconRef: 'iconCotizar',
      items: [
                {
          label: 'Nueva Cotización',
          icon: 'pi pi-plus',
          iconRef: 'iconCrearCotizacion',
          items: [
            {
              label: 'Cotización Individual',
              routerLink: ['cotizar', 'crear_cotizacion_individual'],
              icon: 'pi pi-user',
              iconRef: 'iconCotizacionIndividual'
            },
            {
              label: 'Cotización Masiva',
              routerLink: ['cotizar', 'crear_cotizacion_masiva'],
              icon: 'pi pi-users',
              iconRef: 'iconCotizacionMasiva'
            }
          ]
        },
        {
          label: 'Mantenimiento y Consulta',
          routerLink: ['cotizar', 'mantenimiento_consulta'],
          icon: 'pi pi-cog',
          iconRef: 'iconMantenimiento'
        },
        {
          label: 'Detalle Cotización',
          routerLink: ['cotizar', 'detalle'],
          icon: 'pi pi-search',
          iconRef: 'iconDetalleCotizacion'
        },

        {
          label: 'Calculo Cotización',
          routerLink: ['cotizar', 'detalle-carga'],
          icon: 'pi pi-calculator',
          iconRef: 'iconCalculoCotizacion'
        },

        {
          label: 'Pasar y Confirmar Precio',
          routerLink: ['cotizar', 'pasa-confi-coti'],
          icon: 'pi pi-file-plus',
          iconRef: 'iconPasarPrecios'
        },

        {
          label: 'Revertir Cotización',
          routerLink: ['cotizar', 'revertir'],
          icon: 'pi pi-undo',
          iconRef: 'iconDetalleCotizacion'
        },


      ]
    },
    {
      label: 'Herramientas',
      icon: 'pi pi-cog',
      iconRef: 'iconHerramientas',
      items: [
        {
          label: 'Variables',
          icon: 'pi pi-dollar',
          iconRef: 'iconVariables',
          items: [
            {
              label: 'Tipo de Cambio Real',
              routerLink: ['herramientas', 'tipo-cambio-real'],
              icon: 'pi pi-dollar',
              iconRef: 'iconTipoCambioReal'
            }
          ]
        },
        {
          label: 'Precio',
          icon: 'pi pi-dollar',
          iconRef: 'iconPrecio',
          items: [
            {
              label: 'Precio de Hilados',
              routerLink: ['herramientas', 'precio-hilado'],
              icon: 'pi pi-dollar',
              iconRef: 'iconPrecioHilado'
            },
            {
              label: 'Precio de Hilados Especiales',
              routerLink: ['herramientas', 'precio-especial'],
              icon: 'pi pi-dollar',
              iconRef: 'iconPrecioHiladoEspecial'
            }
          ]
        },
        {
          label: 'Rubros Extras',
          icon: 'pi pi-dollar',
          iconRef: 'iconRubroExtra',
          items: [
            {
              label: 'Tabla de Rubros Extras de Cotizaciones',
              routerLink: ['herramientas', 'rubro-extra'],
              icon: 'pi pi-dollar',
              iconRef: 'iconRubroExtraTabla'
            }
          ]
        }
      ]
    }
  ];

  getMenuItems(): MenuItem[] {
    return this.items;
  }
}
