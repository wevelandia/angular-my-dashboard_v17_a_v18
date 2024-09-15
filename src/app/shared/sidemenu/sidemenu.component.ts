import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems = routes
    .map( (route) => route.children ?? [] )
    .flat()
    .filter( (route) => route && route.path )
    .filter( (route) => !route.path?.includes(':') );

  /* Como el menu va a ser estatico lo manejamos aca con una constante */
  constructor() {

    /* const dashboardRoutes = routes
    /*  .map( route => route.children ?? [] ) */ /* Puede venis, sino se deja de todas maneras como un arreglo */
    /*  .flat() */ /* Esto se encarga de aplanar el arreglo y lo deja en uno solos */
    /*  .filter( route => route && route.path ) */ /* Si la ruta exite y la ruta tiene el path lo muestro, en caso contrario no sale */
    /*  .filter( route => !route.path?.includes(':') ); */

    /*console.log(dashboardRoutes);  */
  }

}
