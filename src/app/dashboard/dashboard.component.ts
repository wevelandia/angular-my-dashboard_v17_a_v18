import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Este alias de @shared se creo en el archivo tsconfig.json */
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';
//import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

@Component({
  standalone: true,
  /* Como deseamos usar el componente de sidemenu lo importamos */
  imports: [ RouterModule, SidemenuComponent ],
  templateUrl: './dashboard.component.html',
  styles: ``
})
/* Para que funcione esto: loadComponent: () => import('./dashboard/dashboard.component'), en app.routes aca se debe exportar por defecto entonces se adiciona default en la siguiente linea */
export default class DashboardComponent {


}
