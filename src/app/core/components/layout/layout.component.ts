import { Component, HostListener } from '@angular/core';
import * as global from '../../../global'

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  isSidebarOpen: boolean = false;
  titulo: string = global.titulo;

  constructor(

  ) {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      this.isSidebarOpen = false;
    } else {
      this.isSidebarOpen = true;
    }
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth >= 768) {
      // this.isSidebarOpen = true;
    } else {
      this.isSidebarOpen = false;
    }

  }

}
