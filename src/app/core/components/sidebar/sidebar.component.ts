import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuService } from '../../services/menu.service';
import { MenuElemento } from '../../interfaces/core.interface';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  @Input()
  open: boolean = true;

  items: MenuElemento[] = [];
  iconTemplates: { [key: string]: TemplateRef<any> } = {};

  @ViewChild('iconInicio', { static: true }) iconInicio!: TemplateRef<any>;
  @ViewChild('iconHilo', { static: true }) iconHilo!: TemplateRef<any>;
  @ViewChild('iconCroco', { static: true }) iconCroco!: TemplateRef<any>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.items = this.menuService.getMenuItems();

    this.iconTemplates = {
      iconInicio: this.iconInicio,
      iconHilo: this.iconHilo,
      iconCroco: this.iconCroco
    };
  }
}
