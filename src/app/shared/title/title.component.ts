import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
  <h1 class="text-3xl mb-5">{{ title }}</h1>
  `,
  styles: ``
})
export class TitleComponent {
  /* Aca definimos el titulo que es enviado en control-flow.component.html, y se define como obligatorio con el caracter ! */
  @Input({ required: true }) title!: string;
  /* Aca utilizamos transform para cambiar de atributos */
  /* Simplemente lo que se hace aca es que si esta presente me muestra en true y sino false, para ello en el control-flow se le coloca el withShadow y como s esta presente en la linea  <app-title title="Control Flow" withShadow></app-title> entonce me muestra true */
  @Input({ transform: booleanAttribute }) withShadow:boolean = false;


}
